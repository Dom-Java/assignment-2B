Assignment 2B:

A few notes:
-Assignment_2B_functional.js is the most recent js file and is compatible with the css and html
-the css and html are commits from 2A that I moved over to 2B

Requirement breakdown for project:
Scope Isolation & Storage Key Definition: 
Wrap all logic in an Immediately Invoked
Function Expression (IIFE) to avoid polluting the global window scope. Store data under
the explicit key.
Result:
🟨Implemented IIFE in earlier commit, it did not function correctly so I removed it.
a. Example: const STORAGE_KEY = 'agrosens_telemetry_records_v1';
2. Correctly code the threshold classification as described in Assignment 2A write-up. (logic
to classify as critical, optimal, or warning)
Result:
🟩 classifications were added
3. Real-Time Input Constraints & Form Handling must be present. Reject any input that is
not within bounds. If invalid input, prevent record addition and highlight the failing input
fields with a descriptive message in the form's error alert banner. Clear this banner when
inputs become valid.
Result:
🟩 invalid inputs are rejected and alert banners describe the problem
4. Bind to the web-form's submit event and call event.preventDefault() to block full-page
HTTP reloads.
Results:
🟨 Event handler was implemented, but the page still refreshes
