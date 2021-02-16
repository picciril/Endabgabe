namespace NewYear {

    export interface Rocket {
        rocketTitel: string;
        pSize: number;
        pColor: string;
        pShape: string;
        pNumber: number;
    }

    export function generateDatabaseElements(_rocketList: Rocket[]): void {

        let group: HTMLElement | null = null;
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#fireworkTitel");
        group = createSelectElements(_rocketList);

        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }

    function createSelectElements(_rocketList: Rocket[]): HTMLElement | null {

        // let group: HTMLDivElement = document.createElement("div");
        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = "databaseTitels";
        selection.addEventListener("change", getDataFromServer);
        //selection.id = "Test";

        for (let titel of _rocketList) {
            let option: HTMLOptionElement = document.createElement("option");

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


}















































