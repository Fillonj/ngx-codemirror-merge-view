import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  /** Référence de l'élément qui contiendra le composant codeMirror */
  @ViewChild('container') container: any;

  /** Ancien modèle **/
  private oldModel: any;

  /** Nouveau modèle **/
  private newModel: any;

  /** Options d'affichage **/
  private options: any = {
    lineNumbers: true,
    smartIndent: true,
    //autofocus: true,
    theme: 'cobalt',
    mode: 'application/ld+json',
    revertButtons: false,
    showDifferences: true,
    readOnly: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    collapseIdentical: true,
    foldGutter: true,
  };

  /**
   * Initialisation après chargement de la vue
   */
  ngAfterViewInit(): void {
    //Mise en cycle
    setTimeout(() =>
      //Chargement du composant MergeView dans le container
      CodeMirror.MergeView(this.container.nativeElement, {
        ...this.options,
        origLeft: this.oldModel,
        value: this.newModel,
      })
    );
  }

  /**
   * Initialisation
   */
  ngOnInit() {
    //Définition de l'ancien modèle
    this.oldModel = JSON.stringify(
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

    //Définition du nouveau modèle
    this.newModel = JSON.stringify(
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
  }
}
