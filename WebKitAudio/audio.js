var coreFrequency = 8000;
var freqs = calculateFrequencies(coreFrequency);

function setupFrequencies(frequencyValue){
    if(!isNaN(frequencyValue) && frequencyValue >19){
        coreFrequency= Math.floor(frequencyValue);
        freqs = calculateFrequencies(coreFrequency);
        renderFrequencies(freqs);
    }
}

// Calculation from http://www.tinnitustalk.com/threads/acoustic-cr%C2%AE-neuromodulation-do-it-yourself-guide.1469/page-6
function calculateFrequencies(coreFrequency){
    return [
        Math.floor(coreFrequency * 0.773 - 44.5), 
        Math.floor(coreFrequency * 0.903 - 21.5),
        Math.floor(coreFrequency * 1.09 + 52), 
        Math.floor(coreFrequency * 1.395 + 26.5)
    ];
}

function renderFrequencies(frequencies) {
    for (var i = 0; i < frequencies.length; i++) {
        var searchString = "#freq"+(i+1);
        $(searchString).html(frequencies[i]);
        console.log(searchString);
    }   
}

$(document).ready(function(){
	var coreFrequencyBox = $('#coreFrequency'); 
	coreFrequencyBox.val(coreFrequency);
	coreFrequencyBox.keyup(function () { setupFrequencies(coreFrequencyBox.val())});
});


var audio;

try {
  audio = new window.AudioContext();
}
catch (error) {
  audio = new window.webkitAudioContext();
}

var position = 0;

var song = "020310203010--------";
var oscillatorType = "sine";

function createOscillator(freq) {
    var attack = 10,
        decay = 250,
        gain = audio.createGain(),
        osc = audio.createOscillator();
    osc.type=oscillatorType;

    gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

    osc.frequency.value = freq;
    osc.connect(gain);
    osc.start(0);

    setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
        gain.disconnect(audio.destination);
    }, decay)
}

function playNextNote() {
    var note = parseInt(song.charAt(position)),
        freq = freqs[note];
    position += 1;
    if(position >= song.length) {
        position = 0;
    }
    if(freq) {
        createOscillator(freq);
    }
}


function toSawtooth(){
	oscillatorType="sawtooth";
}
function toSine(){
	oscillatorType="sine";
}
function toSquare(){
	oscillatorType="square";
}

var timer = $.timer(function() {
                playNextNote();
        });
timer.set({ time : 166, autostart : true });


