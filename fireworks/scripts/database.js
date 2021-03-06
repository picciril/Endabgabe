"use strict";
var NewYear;
(function (NewYear) {
    function generateDatabaseElements(_rocketList) {
        let group = null;
        let fieldset = document.querySelector("fieldset#fireworkTitel");
        group = createSelectElements(_rocketList);
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }
    NewYear.generateDatabaseElements = generateDatabaseElements;
    function createSelectElements(_rocketList) {
        // let group: HTMLDivElement = document.createElement("div");
        let selection = document.createElement("select");
        selection.name = "databaseTitels";
        selection.addEventListener("change", getDataFromServer);
        //selection.id = "Test";
        for (let titel of _rocketList) {
            let option = document.createElement("option");
            option.setAttribute("name", titel.rocketTitel);
            option.value = option.textContent = titel.rocketTitel;
            selection.appendChild(option);
        }
        return selection;
    }
    // function handleChange(_event: Event): void {
    //     let target: HTMLInputElement = <HTMLInputElement>_event.target;
    //     let userValue: string;
    //     userValue = target.value;
    //     console.log(userValue);
    // }
})(NewYear || (NewYear = {}));
//# sourceMappingURL=database.js.map