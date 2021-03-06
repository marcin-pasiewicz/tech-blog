/*
Copyright 2020 Acoustic, L.P.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Open and configure editor
// See: https://docs.ckeditor.com/ckeditor5/latest/builds/guides/integration/configuration.html and
// https://docs.ckeditor.com/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
var editorPromise = ClassicEditor.create(document.querySelector("#editor"), {
  codeBlock: {
    languages: [
      { language: "plaintext", label: "Plain text" }, // The default language.
      { language: "c", label: "C" },
      { language: "cs", label: "C#" },
      { language: "cpp", label: "C++" },
      { language: "css", label: "CSS" },
      { language: "diff", label: "Diff" },
      { language: "html", label: "HTML" },
      { language: "java", label: "Java" },
      { language: "javascript", label: "JavaScript" },
      { language: "javascript-live", label: "JavaScript live", class: "language-javascript live" },
      { language: "php", label: "PHP" },
      { language: "python", label: "Python" },
      { language: "ruby", label: "Ruby" },
      { language: "typescript", label: "TypeScript" },
      { language: "xml", label: "XML" },
    ],
  },
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "code",
      "codeBlock",
      "removeFormat",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:full",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
    ],
  },
}).catch((error) => {
  console.log(error);
});

editorPromise.then((editor) => {
  wchUIExt.getDefinition().then((definition) => {
    // Get previously set text
    wchUIExt.getElement().then((element) => {
      if (definition.elementType === "group") {
        if (element.value["text"].value) {
          editor.setData(element.value["text"].value);
        }
      } else {
        if (element.value) {
          editor.setData(element.value);
        }
      }
    });

    // Disable the rich text editor and show the formatted text
    if (definition.disabled) {
      editor.isReadOnly = true;
    } else {
      // Save when the editor loses focus
      editor.ui.focusTracker.on("change:isFocused", () => {
        const data = editor.getData();
        if (definition.elementType === "group") {
          wchUIExt.setElement({
            elementType: "group",
            typeRef: definition.typeRef,
            value: {
              text: {
                elementType: "formattedtext",
                value: data,
              },
            },
          });
        } else {
          wchUIExt.setElement({
            elementType: "formattedtext",
            value: data,
          });
        }
      });
    }

    console.log(
      "available toolbar buttons:",
      Array.from(editor.ui.componentFactory.names()),
    );
  });

  // Give RTE enough height
  wchUIExt.requestResizeFrame(250);
});
editorPromise.catch((error) => {
  console.error(error);
});
