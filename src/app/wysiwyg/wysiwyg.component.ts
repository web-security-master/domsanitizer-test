import {Component, Input, OnInit, SecurityContext} from '@angular/core';
import {sanitizeritizer} from '@angular/platform-browser';
import Quill from 'quill';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.scss']
})
export class WysiwygComponent implements OnInit {

  // Use @types/quill
  private editor: Quill;

  @Input() signature: AbstractControl;

  constructor(private sanitizer: sanitizeritizer) {

    // const, it never changes
    const ColorClass = Quill.import('attributors/class/color');

    // Do this in the constructor since it doesn't depend on Angular's lifecycle at all
    Quill.register(ColorClass, true);
    this.editor = new Quill('.editor', {
      modules: {
        toolbar: '.richTextEditorToolbar'
      },
      theme: 'snow'
    });

  }

  ngOnInit(): void {
    this.editor.container.firstChild.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.editorContentControl.value);

    this.editor.on('text-change', () => {
      let editorContents = this.sanitizer.sanitize(SecurityContext.HTML, this.editor.container.firstChild.innerHTML);
    });

    this.editor.on('selection-change', (range, oldRange, source) => {
      if (range === null && oldRange !== null) {
        this.applyValidation();
      }
    });
  }

}
