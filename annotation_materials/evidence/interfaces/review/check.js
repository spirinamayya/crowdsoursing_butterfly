exports.Task = function (options) {
    TolokaHandlebarsTask.call(this, options);
};
exports.Task.prototype = Object.create(TolokaHandlebarsTask.prototype);
exports.Task.prototype.constructor = exports.Task;
exports.Task.prototype.onRender = function () {
    var root = this.getDOMElement();
    var svg = root.querySelector(".boxes");
    svg.replaceChildren();
    this.getTask().input_values.boxes.forEach(function (box) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", box[0] * 1000);
        rect.setAttribute("y", box[1] * 1000);
        rect.setAttribute("width", (box[2] - box[0]) * 1000);
        rect.setAttribute("height", (box[3] - box[1]) * 1000);
        svg.appendChild(rect);
    });
    root.querySelector(".zoom").oninput = function (event) {
        root.querySelector(".check-stage").style.width = event.target.value + "%";
    };
    root.querySelector(".toggle-boxes").onclick = function () {
        svg.style.visibility = svg.style.visibility === "hidden" ? "visible" : "hidden";
    };
};

exports.Task.prototype.validate = function (solution) {
    solution = solution || this.getSolution();
    var base = TolokaHandlebarsTask.prototype.validate.call(this, solution);
    if (base) return base;
    var output = solution.output_values;
    if (output.status === "reviewed") {
        var errors = {};
        ["complete", "no_extra", "accurate"].forEach(function (field) {
            if (!output[field]) errors[field] = {code: "REQUIRED", message: "Выберите ответ."};
        });
        if (Object.keys(errors).length) return {task_id: this.getTask().id, errors: errors};
    }
    return null;
};
