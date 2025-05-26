/*
* problem 1:
# export is used to send a code or made available to use from other files.
export const anExample = () => "Hello World"
# import is used to receive or use the exported codes from other files.
import {anExample} from "/exportFile.js"
anExample() -> "Hello World"

* problem 2:
# default export is used to export file that can be imported using any name. 
default export const sum = (a,b) => a+b
now, if we used named export, we have to call the exported function as the given name in {}. 
import anyName from "/exportFile.js"
anyName(5,6) -> 11

* problem 3:
# "as" keyword is used to change the name of named exported properties.
import {anExample as helloWorld} from "/exportFile.js"
helloWorld() -> "Hello World"

* problem 4:
# named export is where we have to strictly maintain the name of the thing we exported while importing.
# default export is where we can import the exported thing using any name.

* problem 5: 
# no, we cannot have more than one default export in a single file or module. To sum up, one file/module = one default export.
*/