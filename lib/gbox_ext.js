gbox.changeAudioVolume = function(audio_name, amount) {
  if (this._canaudio && (new_volume = this.getAudioVolume(audio_name))) {
    new_volume += amount;
    if (new_volume > 1) new_volume = 1; else if (new_volume < 0) new_volume = 0;
    this.setAudioVolume(audio_name, new_volume);
  }
}

gbox.getAudio = function(audio_name) {
  return gbox._audio.ast[audio_name];
}