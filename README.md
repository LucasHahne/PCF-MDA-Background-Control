# PCF to Change the background of a in a Model Driven App
## What can be done ##
The problem I was facing is the opportunity to change the background in fields in a model driven app. Unfortunately, there is no easy way of doing that rather than implementing a PCF.
The PCF in this solution allows to update the background color of a **text** field. Each one has it's own solution.

## Additions ##
- Decimal fields have change buttons in the right end set to 0.5 to increase or decrease. No other steps are currently supported. 

## Availability ##
You can find a short introduction on the PCF Gallery [here](https://pcf.gallery/pcf-mda-background-change-textfield/).
Solutions to be downloaded:
- **Single Line Textfield** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFTextInput/)
- **Wholenumber field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFNumberInput/solution)
- **Decimal field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFDecimalInput/solution)
- **Date Only field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/tree/main/ColorChangerPCFDateOnlyInput/bin/Debug)
- **TwoOptions field** solution.zip can be downloaded [here](https://github.com/LucasHahne/PCF-MDA-Background-Control/blob/main/ColorChangerPCFTwoOptionsInput/InputFieldTwoOptionsToChange.zip) . **Check the details on this one below!**

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
![image](https://github.com/LucasHahne/PCF-MDA-Background-Control/assets/63300977/7337b24f-aeb7-417f-a3c6-cd8febc6dcd9)


### Details for TwoOptions field
![image](https://github.com/LucasHahne/PCF-MDA-Background-Control/assets/63300977/ce52a081-db8a-4baa-b23b-36a432755403)

You will find an additional field with the language selection. Type in EN-en or DE-de as english and german are currently suppported as yes or no.
The field cannot be applied to choices, only Yes/No fields.


If you encounter any problem or wish more extension feel free to message me via [LinkedIn](https://www.linkedin.com/in/lucas-hahne/?locale=en_US)
