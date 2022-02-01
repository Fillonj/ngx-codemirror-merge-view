import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

declare var CodeMirror: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('codemirror') ref: any;

  codeMirrorOptions;
  obj;
  obj2;

  ngAfterViewInit(): void {
    CodeMirror.mergedView();
  }

  ngOnInit() {
    this.obj = JSON.stringify(
      {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object',
        title: 'Object',
        additionalProperties: false,
        properties: {
          string: {
            type: 'string',
            title: 'String',
          },
        },
      },
      null,
      ' '
    );

    this.obj2 = JSON.stringify(
      {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object2',
        title: 'Object2',
        additionalProperties: false,
        properties: {
          string: {
            type: 'Modifier',
            title: 'String',
          },
        },
      },
      null,
      ' '
    );

    this.codeMirrorOptions = {
      theme: 'cobalt',
      mode: 'javascript',
      readOnly: true,
      lineNumbers: true,
      lineWrapping: true,
      foldGutter: true,
      gutters: [
        'CodeMirror-linenumbers',
        'CodeMirror-foldgutter',
        'CodeMirror-lint-markers',
      ],
      autoCloseBrackets: true,
      matchBrackets: true,
      lint: true,
      showDifferences: true,
      origLeft: this.obj,
      value: this.obj2,
    };
  }
}
