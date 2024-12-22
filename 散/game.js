// 游戏变量
let affection = 0; // 流浪者的情感值

// 更新对话框内容
function updateDialogue(text) {
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.innerHTML = text;
}

// 更新选项
function updateOptions() {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
}

// 显示选项按钮
function showOption(optionText, handler) {
    const optionsContainer = document.getElementById('options-container');
    const optionButton = document.createElement('button');
    optionButton.className = 'button';
    optionButton.textContent = optionText;
    optionButton.onclick = handler;
    optionsContainer.appendChild(optionButton);
}

// 触发生日剧情
function triggerBirthdayDialogue() {
    updateDialogue('今天是流浪者的生日。你注意到他似乎有些不太一样，心情似乎有些低落。');
    showOption('问他：“你是不是有什么不愿说的事？”', handleChoice1);
    showOption('什么也不说，默默陪伴他。', handleChoice2);
}

// 选择1：询问生日
function handleChoice1() {
    let dialogueText = '';
    if (affection > 30) {
        dialogueText = '流浪者微微一愣，看了你一眼，似乎有些感慨：“你真的能察觉到？”';
        affection += 10;
    } else {
        dialogueText = '流浪者冷冷地看了你一眼，嘴角微微上扬：“别多管闲事。”';
        affection -= 5;
    }
    updateDialogue(dialogueText);
    showOption('继续问他：“你不想庆祝一下生日吗？”', handleChoice3);
    showOption('转身离开，不再提及生日。', handleChoice4);
}

// 选择2：默默陪伴
function handleChoice2() {
    updateDialogue('你没有打破沉默，静静地陪在流浪者身旁，似乎能感受到他内心的复杂情绪。');
    affection += 5;
    showOption('继续陪伴他，什么也不说。', handleChoice2);
}

// 选择3：继续询问生日
function handleChoice3() {
    let dialogueText = '';
    if (affection > 30) {
        dialogueText = '流浪者叹了口气，稍微放下了防备：“今天不是一个值得庆祝的日子。”';
        affection += 20;
    } else {
        dialogueText = '流浪者冷漠地摇了摇头：“你真的不懂。”';
        affection -= 10;
    }
    updateDialogue(dialogueText);
    showOption('给他一份礼物，改变气氛。', handleGiftChoice1);
    showOption('离开，尊重他的情绪。', handleChoice4);
}

// 选择4：离开
function handleChoice4() {
    updateDialogue('流浪者没有阻止你离开，眼神中似乎闪过一丝复杂的情感。');
    showOption('继续游戏', triggerBirthdayDialogue);
}

// 赠送礼物的选择
function handleGiftChoice1() {
    updateDialogue('你决定送给流浪者一份礼物。他似乎很惊讶，但没有拒绝。');
    showOption('送他一件精心挑选的礼物。', handleGiftReaction1);
    showOption('送给他一件你随手找的物品。', handleGiftReaction2);
}

// 礼物反应
function handleGiftReaction1() {
    let dialogueText = '';
    if (affection > 30) {
        dialogueText = '流浪者接过礼物，眼中闪过一丝柔和的光：“这…比我想的要好。”';
        affection += 20;
    } else {
        dialogueText = '流浪者眉头皱了皱，接过礼物，语气依旧冷淡：“谢了。”';
        affection -= 5;
    }
    updateDialogue(dialogueText);
    showOption('继续与他交流。', triggerBirthdayDialogue);
}

// 礼物反应2（不太在乎的礼物）
function handleGiftReaction2() {
    updateDialogue('流浪者拿起你随手递过去的礼物，眉头一皱：“就这个？”');
    affection -= 10;
    showOption('继续与他交流。', triggerBirthdayDialogue);
}

// 最终对话
function finalBirthdayDialogue() {
    updateDialogue('夜晚，流浪者看着你，眼神柔和：“今天多谢你陪我，虽然…我不喜欢这种日子。”');
    if (affection > 50) {
        showOption('温暖地回应：“你不孤单，我会在你身边。”', handleFinalChoice1);
    } else {
        showOption('冷淡地回应：“生日不过是个普通的日子。”', handleFinalChoice2);
    }
}

// 最终选择1：温暖回应
function handleFinalChoice1() {
    updateDialogue('流浪者看着你，眼神柔软：“…谢谢。”他似乎真正感受到了你的关心。');
    affection += 30;
    showOption('继续游戏', triggerBirthdayDialogue);
}

// 最终选择2：冷淡回应
function handleFinalChoice2() {
    updateDialogue('流浪者淡淡地笑了笑：“你说得对，生日不过是个普通的日子。”');
    showOption('继续游戏', triggerBirthdayDialogue);
}
