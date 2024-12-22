// 设置初始对话和选项
let affection = 0; // 用于跟踪流浪者的情感变化

// 更新对话框的内容
function updateDialogue(text) {
    const dialogueBox = document.getElementById('dialogue-box');
    dialogueBox.innerHTML = text; // 更新对话框内容
}

// 清空并更新选项
function updateOptions() {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // 清空现有选项
}

// 显示选项
function showOption(optionText, handler) {
    const optionsContainer = document.getElementById('options-container');
    const optionButton = document.createElement('button');
    optionButton.className = 'button';
    optionButton.textContent = optionText;
    optionButton.onclick = handler;
    optionsContainer.appendChild(optionButton);
}

// 生日剧情触发
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
    showOption('继续陪伴他，什么也不说。', handleChoice2); // 反复选择会增加好感度
}

// 选择3：继续询问生日
function handleChoice3() {
    let dialogueText = '';
    if (affection > 30) {
        dialogueText = '流浪者叹了口气，轻轻道：“我的生日对我来说并没有什么特别的意义。曾经的我，早已失去这些。”他露出一丝淡淡的笑容，仿佛回忆起了什么。';
        affection += 10;
    } else {
        dialogueText = '流浪者有些不耐烦地皱了皱眉：“就算是生日，又能怎样？这对于我来说不过是个普通的日子。”';
        affection -= 5;
    }
    updateDialogue(dialogueText);
    showOption('安慰他：“每个人都有属于自己的特别时刻，生日也不例外。”', handleChoice5);
    showOption('不再说话，沉默地离开。', handleChoice6);
}

// 选择4：转身离开
function handleChoice4() {
    updateDialogue('你没有再多说什么，转身离开。流浪者没有阻止你，只是看着你的背影，微微叹息。');
    affection -= 5;
    showOption('回到流浪者身边，想看看他是否改变了心情。', handleChoice7);
}

// 选择5：安慰他
function handleChoice5() {
    let dialogueText = '';
    if (affection > 30) {
        dialogueText = '流浪者看了你一眼，眼神中带着些许温暖：“也许吧，你说得对。”他露出一抹真诚的笑容。';
        affection += 15;
    } else {
        dialogueText = '流浪者沉默片刻，冷冷地回答：“你不懂的。”但语气中似乎少了一些敌意。';
        affection += 5;
    }
    updateDialogue(dialogueText);
    showOption('给流浪者一个礼物，作为生日的庆祝。', handleChoice8);
    showOption('继续安慰流浪者，陪着他。', handleChoice2);
}

// 选择6：不再说话，沉默离开
function handleChoice6() {
    updateDialogue('你选择沉默离开，流浪者也没有追上来，似乎不再在乎。');
    affection -= 10;
    showOption('再回到他身边，看看他是否需要帮助。', handleChoice7);
}

// 选择7：回到流浪者身边
function handleChoice7() {
    updateDialogue('你走回流浪者身边，他轻轻抬头，看了你一眼，似乎并不感到意外。“你还是不走？”他冷冷地问道。');
    showOption('点点头，陪着他继续静默。', handleChoice2);
    showOption('再次询问他，是否愿意庆祝生日。', handleChoice3);
}

// 选择8：给他一个礼物
function handleChoice8() {
    updateDialogue('你递给流浪者一个简单的礼物，流浪者看着你手中的东西，微微愣住。随后，他缓缓接过：“谢谢…虽然不知该如何接受。”');
    affection += 20;
    showOption('告诉他，这是你的心意。', handleChoice9);
    showOption('离开，让他自己处理。', handleChoice10);
}

// 选择9：告诉他这是你的心意
function handleChoice9() {
    updateDialogue('流浪者看着你，眼中闪烁着复杂的情感。最终，他微微笑了笑：“谢谢…我会记住的。”');
    affection += 10;
    endGame();
}

// 选择10：离开，让他自己处理
function handleChoice10() {
    updateDialogue('你转身离开，流浪者没有再叫住你，只是静静地看着你离开，心情似乎并没有变得更好。');
    affection -= 5;
    endGame();
}

// 游戏结束
function endGame() {
    updateDialogue('生日的日子渐渐结束，流浪者依旧保持沉默，仿佛回到了他独自的世界。无论你做了什么，今天的他依然没有得到真正的安慰。');
    showOption('重新开始', restartGame);
}

// 重新开始
function restartGame() {
    affection = 0;
    updateDialogue('今天是流浪者的生日。你注意到他似乎有些不太一样，心情似乎有些低落。');
    showOption('问他：“你是不是有什么不愿说的事？”
