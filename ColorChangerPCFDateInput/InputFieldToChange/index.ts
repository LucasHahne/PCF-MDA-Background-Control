import test from "node:test";
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class InputDateFieldToChange
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private _inputElement: HTMLInputElement;
  private _inputValue: Date | undefined;
  private _notifyOutputChanged: () => void;
  private _colorInRgb: string;
  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */

  public onChange = (event: Event): void => {
    console.log("onChange");
    const twoHoursToAdd = 1000 * 60 * 60 * 2;
    let dateFormatter = new Date(this._inputElement.value).getTime();
    if (!isNaN(dateFormatter)) {
        dateFormatter = dateFormatter + twoHoursToAdd;
        this._inputValue = new Date(dateFormatter);
    } else {
        this._inputValue = undefined;
    }
    this._notifyOutputChanged();
};

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    // Add control initialization code
    this._notifyOutputChanged = notifyOutputChanged;

    console.log("init");

    // Create DOM Element
    this._inputElement = document.createElement("input");
    this._inputElement.setAttribute("type", "date");
    this._inputElement.setAttribute("class", "datePCFInputControl");
    container.appendChild(this._inputElement);

    // Listen for blur event
    this._inputElement.addEventListener("blur", this.onChange);

    // Initialize input value
    const rawDateValue = context.parameters.InputDateFieldToChange.raw;
    this._inputValue = rawDateValue ? new Date(rawDateValue) : undefined;

    // Set input value
    this._inputElement.value = this._inputValue ? String(this._inputValue) : "";

    this._colorInRgb =
      context.parameters.ColorInRGB.raw || "rgb(198, 239, 206)";
    this._inputElement.style.backgroundColor = this._colorInRgb;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    console.log("update");

    this._inputValue = context.parameters.InputDateFieldToChange.raw || undefined; // new Date(0);

    if(this._inputValue){
    // Get year, month, and day part from the date
    let year = this._inputValue
      ? this._inputValue.toLocaleString("default", { year: "numeric" })
      : "";
    let month = this._inputValue
      ? this._inputValue.toLocaleString("default", { month: "2-digit" })
      : "";
    let day = this._inputValue
      ? this._inputValue.toLocaleString("default", { day: "2-digit" })
      : "";

    // Generate yyyy-mm-dd date string
    let formattedDate = year + "-" + month + "-" + day;

    this._inputElement.value = formattedDate;
    }

    this._colorInRgb = context.parameters.ColorInRGB.raw || "";
    this._inputElement.style.backgroundColor = this._colorInRgb;
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    console.log("outputs");
    return {
      InputDateFieldToChange:
        this._inputValue !== undefined ? new Date(this._inputValue) : undefined,
      // InputDateFieldToChange: new Date(this._inputValue),
    };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
