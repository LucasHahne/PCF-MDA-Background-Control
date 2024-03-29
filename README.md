# PCF to Change the background of a in a Model Driven App
## What can be done ##
The problem I was facing is the opportunity to change the background in fields in a model driven app. Unfortunately, there is no easy way of doing that rather than implementing a PCF.
The PCF in this solution allows to update the background color of a **text** field. Currently only the **Single Line Textfield**, **Whole Number** and **Decimal Number** is supported. Each one has it's own solution.

## Additions ##
- You won't be able to adjust the color for multiline fields or text areas. This is the next step to implement and yet to come.
- Decimal fields have change buttons in the right end set to 0.5 to increase or decrease. No other steps are currently supported. 

## Availability ##
You can find a short introduction on the PCF Gallery [here](https://pcf.gallery/pcf-mda-background-change-textfield/).
Solutions to be downloaded:
- **Single Line Textfield** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFTextInput/)
- **Wholenumber field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFNumberInput/solution)
- **Decimal field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFDecimalInput/solution)
- **Date Only field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFDateOnlyInput/bin/Debug)
Make sure to download the .zip as you have to import it like every other solution into your Power Apps.

## Using it on a MDA ##
Import the solution into your environment.
If you have a textfield inside your form - go to the components tab while you are in edit mode and use the InputFieldToChange component.
If you cannot find it in the popup make sure to have a look in the search for more components tab.
Once you can select it make sure to tick the show component on fields and add a rgb(xxx,yyy,zzz) value in the Static value field.
For now only rgb works - no hex or hsl colors.

![Picture_2](https://github.com/LucasHahne/PCF-MDA-Background-Control/assets/63300977/34a43c75-69df-41fa-aa88-5f983c5bb53a)

Apply the changes and you will see the color in your field:
![Picture_1](https://github.com/LucasHahne/PCF-MDA-Background-Control/assets/63300977/5b529fff-e0ce-4fcd-b1be-04aec2931fdf)

If you encounter any problem or wish more extension feel free to message me via [LinkedIn](https://www.linkedin.com/in/lucas-hahne/?locale=en_US)
