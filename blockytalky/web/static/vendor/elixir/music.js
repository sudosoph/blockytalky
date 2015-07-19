/**
 * Visual Block Language
 * BT Music
 * @fileoverview Generate Elixir for BT <-> SonicPi
 * @author matthew.ahrens@tufts.edu (Matthew Ahrens)
 * Generated with: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
 */
'use strict';

goog.provide('Blockly.Elixir.music');

goog.require('Blockly.Elixir');
//motif and playing
Blockly.Blocks['defmotif'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Create the motif:");
    this.appendStatementInput("DO")
        .setCheck(['Music'])
        .appendField("as:");
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['defmotif'] = function(block) {
  var value_name = Blockly.Elixir.valueToCode(block, 'NAME', Blockly.Elixir.ORDER_ATOMIC);
  var statements_do = Blockly.Elixir.statementToCode(block, 'DO');
  var code = 'defmotif ' + value_name + ' do\n' + statements_do + '\nend\n';
  Blockly.Elixir.macros_.push(code);
  return code;
};

//play
Blockly.Blocks['play_synth'] = {
  init: function() {
    this.appendValueInput("NOTES")
        .setCheck(["String", "Array", "Number"])
        .appendField("play ");
    this.appendValueInput("BEATS")
        .setCheck("Number")
        .appendField(" for");
    this.appendDummyInput()
        .appendField("beats");
    this.setInputsInline(true);
    this.setPreviousStatement(true, 'Music');
    this.setNextStatement(true,'Music');
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['play_synth'] = function(block) {
  var value_notes = Blockly.Elixir.valueToCode(block, 'NOTES', Blockly.Elixir.ORDER_ATOMIC);
  var value_beats = Blockly.Elixir.valueToCode(block, 'BEATS', Blockly.Elixir.ORDER_ATOMIC);
  var code = 'play_synth('+value_notes+','+value_beats+')\n';
  return code;
};
Blockly.Blocks['trigger_drum'] = {
  init: function() {
    // sample atoms taken directly from sonic pi sample library.
    this.appendDummyInput()
        .appendField("Trigger drum sample: ")
        .appendField(new Blockly.FieldDropdown([["Kick", ":drum_bass_soft"], ["Snare", ":drum_snare_soft"], ["Low Tom", ":drum_tom_lo_soft"], ["High Tom", ":drum_tom_hi_soft"], ["Splash", ":drum_splash_soft"], ["Cymbal", ":drum_cymbal_soft"], ["Open Hi-Hat", ":drum_cymbal_open"], ["Closed Hi-Hat", ":drum_cymbal_closed"]]), "SAMPLE")
        .appendField(new Blockly.FieldDropdown([["hard", "hard"], ["soft", "soft"]]), "STYLE");
    this.setPreviousStatement(true, 'Music');
    this.setNextStatement(true, 'Music');
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['trigger_drum'] = function(block) {
  var dropdown_sample = block.getFieldValue('SAMPLE');
  var dropdown_style = block.getFieldValue('STYLE');
  dropdown_sample = dropdown_sample.replace('soft', dropdown_style);
  var code = 'trigger_sample('+dropdown_sample+')\n';
  return code;
};
Blockly.Blocks['rest'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("rest for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["beats", ":beats"], ["measures", ":measures"], ["option", "OPTIONNAME"]]), "UNITS");
    this.setInputsInline(true);
    this.setPreviousStatement(true,'Music');
    this.setNextStatement(true,'Music');
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['rest'] = function(block) {
  var value_amount = Blockly.Elixir.valueToCode(block, 'AMOUNT', Blockly.Elixir.ORDER_ATOMIC);
  var dropdown_units = block.getFieldValue('UNITS');
  var code = 'rest('+value_amount+','+dropdown_units+')\n';
  return code;
};
Blockly.Blocks['wait_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for:")
        .appendField(new Blockly.FieldDropdown([["downbeat", ":down_beat"], ["upbeat", ":up_beat"], ["beat 1", ":beat1"], ["beat 2", ":beat2"], ["beat 3", ":beat3"], ["beat 4", ":beat4"]]), "UNITS");
    this.setInputsInline(true);
    this.setPreviousStatement(true,'Music');
    this.setNextStatement(true,'Music');
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['wait_for'] = function(block) {
  var dropdown_units = block.getFieldValue('UNITS');
  var code = 'wait_for('+dropdown_units+')\n';
  return code;
};
//actions
//play
Blockly.Blocks['set_volume'] = {
  init: function() {
    this.appendValueInput("VOLUME")
        .setCheck(["Number"])
        .appendField("set volume to ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['set_volume'] = function(block) {
  var value_volume = Blockly.Elixir.valueToCode(block, 'VOLUME', Blockly.Elixir.ORDER_ATOMIC);
  var code = 'set_volume('+value_volume+')\n';
  return code;
};
Blockly.Blocks['stop_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop sound");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['stop_sound'] = function(block) {
  var code = 'stop_sound()\n';
  return code;
};
Blockly.Blocks['cue'] = {
  init: function() {
    this.appendValueInput("MOTIF")
        .setCheck("String")
        .appendField("cue motif:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['cue'] = function(block) {
  var value_motif = Blockly.Elixir.valueToCode(block, 'MOTIF', Blockly.Elixir.ORDER_ATOMIC);
  var code = 'cue('+value_motif+')\n';
  return code;
};
Blockly.Blocks['loop'] = {
  init: function() {
    this.appendValueInput("MOTIF")
        .setCheck("String")
        .appendField("loop motif:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['loop'] = function(block) {
  var value_motif = Blockly.Elixir.valueToCode(block, 'MOTIF', Blockly.Elixir.ORDER_ATOMIC);
  var code = 'loop('+value_motif+')\n';
  return code;
};
Blockly.Blocks['sync_to_parent'] = {
  init: function() {
    this.appendValueInput("PARENT")
        .setCheck("String")
        .appendField("sync to BTU");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Elixir['sync_to_parent'] = function(block) {
  var value_parent = Blockly.Elixir.valueToCode(block, 'PARENT', Blockly.Elixir.ORDER_ATOMIC);
  var code = 'sync_to('+value_parent+')\n';
  return code;
};

Blockly.Blocks['chord'] = {
  init: function() {
    this.appendValueInput("Note1")
        .appendField("chord:");
    this.setInputsInline(true);
    this.setOutput(true,"Array");
    this.setColour(275);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.notecount = 1;
    console.log(this);
  },
  onchange: function(ev){
    for(var i = 2; i < 5; i++){
      var note = Blockly.Elixir.valueToCode(this, 'Note' + i, Blockly.Elixir.ORDER_ATOMIC);
      var prev_note = Blockly.Elixir.valueToCode(this, 'Note' + (i-1), Blockly.Elixir.ORDER_ATOMIC);
      if(note == "" && prev_note != "" && i == (this.notecount + 1)){
        this.appendValueInput("Note"+i);
        this.notecount++;
      }
    }
    for(var i = 4; i > 1; i--){
      var note = Blockly.Elixir.valueToCode(this, 'Note' + i, Blockly.Elixir.ORDER_ATOMIC);
      var prev_note = Blockly.Elixir.valueToCode(this, 'Note' + (i-1), Blockly.Elixir.ORDER_ATOMIC);
      if(note == "" && prev_note == "" && this.notecount >= i){
        if(this.inputList.filter(function(x){return x.name == "Note"+i}).length > 0){
          this.removeInput("Note"+i);
        }
        this.notecount--;
      }
    }
  }
};
Blockly.Elixir['chord'] = function(block) {
  var code = "[";
  for(var i=1; i <5; i++){
    var note = Blockly.Elixir.valueToCode(block, 'Note'+i, Blockly.Elixir.ORDER_ATOMIC);
    if(note != "" && i > 1){
      code += "," + note;
    }
    else if(note != ""){
      code += note;
    }
  }
  code += ']';
  return [code,Blockly.Elixir.ORDER_ATOMIC];
};
