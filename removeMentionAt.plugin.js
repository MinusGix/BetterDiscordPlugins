//META{"name":"removeMentionAt"}*//

var removeMentionAt = function() {};

removeMentionAt.prototype.start = function() {
    this.enabled = true;
};

removeMentionAt.prototype.stop = function() {
    this.enabled = false;
};

removeMentionAt.prototype.onMessage = function() {
    $('span.mention').not('.MinusGix-Plugin-removeMentionAt-Checked').each(function(index, element) {
        var $ele = $(element);
        $ele.text($ele.text().replace(/\@/, ''));
        $ele.addClass('MinusGix-Plugin-removeMentionAt-Checked');
    });
};

removeMentionAt.prototype.onSwitch = removeMentionAt.prototype.onMessage;

removeMentionAt.prototype.observer = removeMentionAt.prototype.unload = removeMentionAt.prototype.load = function() {};

removeMentionAt.prototype.getSettingsPanel = function() {
    return "";
};

removeMentionAt.prototype.getName = function() {
    return "Remove Mention @ Symbol";
};

removeMentionAt.prototype.getDescription = function() {
    return "Removes Mention @ Symbol from messagres";
};

removeMentionAt.prototype.getVersion = function() {
    return "1.0.0";
};

removeMentionAt.prototype.getAuthor = function() {
    return "MinusGix";
};