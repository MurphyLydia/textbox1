/********** 
 * 8 *
 **********/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.0.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '8';  // from the Builder filename that created this script
let expInfo = {
    'participant': '1',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const SentenceLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SentenceLoopLoopBegin(SentenceLoopLoopScheduler));
flowScheduler.add(SentenceLoopLoopScheduler);
flowScheduler.add(SentenceLoopLoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'sentences.xlsx', 'path': 'sentences.xlsx'},
    {'name': 'sentences.xlsx', 'path': 'sentences.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var opening;
var instr_resp;
var LoopClock;
var shown_stim;
var response_instr;
var underline;
var response_textbox;
var end_instr;
var tmp;
var underline_hint;
var endClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  opening = new visual.TextStim({
    win: psychoJS.window,
    name: 'opening',
    text: '实验说明：\n屏幕上会逐词显示一个句子。\n每次看到一个词后，请在下方输入你认为的下一个词。\n输入结束后请按Enter键，下一个词会自动显示。\n\n按空格键开始实验',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Loop"
  LoopClock = new util.Clock();
  shown_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'shown_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.83), 0.37], draggable: false, height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  response_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'response_instr',
    text: '请输入下一个词:',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.208), (- 0.185)], draggable: true, height: 0.044,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  underline = new visual.ShapeStim ({
    win: psychoJS.window, name: 'underline', 
    vertices: [[-[0.3, 0][0]/2.0, 0], [+[0.3, 0][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0.12, (- 0.222)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  response_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'response_textbox',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0.1, (- 0.185)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.2604, 0.0556],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  end_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_instr',
    text: "That\\'s the end of this sentence.\nNext sentence would appear after 1s.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.185)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  tmp = new visual.TextStim({
    win: psychoJS.window,
    name: 'tmp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.83), 0], draggable: false, height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0, 0.0, 0.0]),  opacity: undefined,
    depth: -6.0 
  });
  
  underline_hint = new visual.ShapeStim ({
    win: psychoJS.window, name: 'underline_hint', 
    vertices: [[-[0.3, 0][0]/2.0, 0], [+[0.3, 0][0]/2.0, 0]],
    ori: 0.0, 
    pos: [(- 0.83), 0.37], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '实验结束，感谢参与！\n\n窗口将在两秒后自动关闭',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionMaxDurationReached;
var _instr_resp_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    instr_resp.keys = undefined;
    instr_resp.rt = undefined;
    _instr_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(opening);
    instructionComponents.push(instr_resp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *opening* updates
    if (t >= 0.0 && opening.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opening.tStart = t;  // (not accounting for frame time here)
      opening.frameNStart = frameN;  // exact frame index
      
      opening.setAutoDraw(true);
    }
    
    
    // if opening is active this frame...
    if (opening.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_resp* updates
    if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp.tStart = t;  // (not accounting for frame time here)
      instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
    }
    
    // if instr_resp is active this frame...
    if (instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instr_resp_allKeys = _instr_resp_allKeys.concat(theseKeys);
      if (_instr_resp_allKeys.length > 0) {
        instr_resp.keys = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_resp.rt = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].rt;
        instr_resp.duration = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    instr_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SentenceLoop;
function SentenceLoopLoopBegin(SentenceLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SentenceLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sentences.xlsx',
      seed: undefined, name: 'SentenceLoop'
    });
    psychoJS.experiment.addLoop(SentenceLoop); // add the loop to the experiment
    currentLoop = SentenceLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSentenceLoop of SentenceLoop) {
      snapshot = SentenceLoop.getSnapshot();
      SentenceLoopLoopScheduler.add(importConditions(snapshot));
      const WordLoopLoopScheduler = new Scheduler(psychoJS);
      SentenceLoopLoopScheduler.add(WordLoopLoopBegin(WordLoopLoopScheduler, snapshot));
      SentenceLoopLoopScheduler.add(WordLoopLoopScheduler);
      SentenceLoopLoopScheduler.add(WordLoopLoopEnd);
      SentenceLoopLoopScheduler.add(SentenceLoopLoopEndIteration(SentenceLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var WordLoop;
function WordLoopLoopBegin(WordLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    WordLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'WordLoop'
    });
    psychoJS.experiment.addLoop(WordLoop); // add the loop to the experiment
    currentLoop = WordLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisWordLoop of WordLoop) {
      snapshot = WordLoop.getSnapshot();
      WordLoopLoopScheduler.add(importConditions(snapshot));
      WordLoopLoopScheduler.add(LoopRoutineBegin(snapshot));
      WordLoopLoopScheduler.add(LoopRoutineEachFrame());
      WordLoopLoopScheduler.add(LoopRoutineEnd(snapshot));
      WordLoopLoopScheduler.add(WordLoopLoopEndIteration(WordLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function WordLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WordLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WordLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function SentenceLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SentenceLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SentenceLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var LoopMaxDurationReached;
var cur_word_idx;
var words;
var LoopMaxDuration;
var LoopComponents;
function LoopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Loop' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    LoopClock.reset();
    routineTimer.reset();
    LoopMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    cur_word_idx = 0;
    words = sentence.split(" ");
    endClock = new util.Clock();
    
    response_textbox.setText('');
    response_textbox.refresh();
    psychoJS.experiment.addData('Loop.started', globalClock.getTime());
    LoopMaxDuration = null
    // keep track of which components have finished
    LoopComponents = [];
    LoopComponents.push(shown_stim);
    LoopComponents.push(response_instr);
    LoopComponents.push(underline);
    LoopComponents.push(response_textbox);
    LoopComponents.push(end_instr);
    LoopComponents.push(tmp);
    LoopComponents.push(underline_hint);
    
    for (const thisComponent of LoopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var shown;
var next_phrase;
var char_width_estimate;
var remaining_width;
var shown_width;
var start_x;
var x_right;
var x_center;
var y_line;
var keys;
function LoopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Loop' ---
    // get current time
    t = LoopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    shown_stim = new visual.TextStim(psychoJS.window, {"text": "", "font": "Arial", "height": 0.05, "color": "white", "pos": [(- 0.83), 0.37], "wrapWidth": 2, "alignText": "left", "anchorHoriz": "left"});
    shown = words.slice(0, (cur_word_idx + 1)).join(" ");
    shown_stim.text = shown;
    shown_stim.draw();
    if ((cur_word_idx < (words.length - 1))) {
        next_phrase = words.slice((cur_word_idx + 1)).join(" ");
        tmp = new visual.TextStim(psychoJS.window, {"text": "", "font": "Arial", "height": 0.05, "color": "white", "pos": [(- 0.83), 0], "wrapWidth": 2, "alignText": "left", "anchorHoriz": "left"});
        tmp.text = next_phrase;
        char_width_estimate = 0.05;
        remaining_width = (next_phrase.length * char_width_estimate);
        shown_width = (shown.length * char_width_estimate);
        start_x = (- 0.83);
        x_right = (start_x + shown_width);
        x_center = ((x_right + (remaining_width / 2)) + 0.01);
        y_line = 0.33;
        underline_hint = new visual.Rect(psychoJS.window, {"width": remaining_width, "height": 0.004, "pos": [x_center, y_line], "fillColor": "white"});
        underline_hint.draw();
        keys = psychoJS.eventManager.getKeys({"keyList": ["return"]});
        response_instr.draw();
        underline.draw();
        response_textbox.draw();
        end_instr.autoDraw = false;
        if ((keys && _pj.in_es6("return", keys))) {
            if ((response_textbox.text !== "")) {
                response_textbox.setText("");
                cur_word_idx += 1;
                shown = words.slice(0, (cur_word_idx + 1)).join(" ");
                shown_stim.draw();
                endClock.reset();
            }
        }
    } else {
        if ((cur_word_idx >= (words.length - 1))) {
            response_instr.autoDraw = false;
            underline.autoDraw = false;
            response_textbox.autoDraw = false;
            end_instr.draw();
            shown_stim.draw();
            if ((endClock.getTime() >= 1.0)) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *shown_stim* updates
    
    // if shown_stim is active this frame...
    if (shown_stim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *response_instr* updates
    
    // if response_instr is active this frame...
    if (response_instr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *underline* updates
    if ((0.0) && underline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      underline.tStart = t;  // (not accounting for frame time here)
      underline.frameNStart = frameN;  // exact frame index
      
      underline.setAutoDraw(true);
    }
    
    
    // if underline is active this frame...
    if (underline.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *response_textbox* updates
    
    // if response_textbox is active this frame...
    if (response_textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_instr* updates
    
    // if end_instr is active this frame...
    if (end_instr.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tmp* updates
    
    // if tmp is active this frame...
    if (tmp.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *underline_hint* updates
    
    // if underline_hint is active this frame...
    if (underline_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LoopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LoopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Loop' ---
    for (const thisComponent of LoopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Loop.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    endClock.reset();
    
    psychoJS.experiment.addData('response_textbox.text',response_textbox.text)
    // the Routine "Loop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // if end_text is active this frame...
    if (end_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      end_text.tStop = t;  // not accounting for scr refresh
      end_text.frameNStop = frameN;  // exact frame index
      // update status
      end_text.status = PsychoJS.Status.FINISHED;
      end_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
