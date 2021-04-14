import {Component, OnInit, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.scss']
})
export class SanitizerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  editorCode = '';
  sanitizedCode = '';
  sanitizedRender: SafeHtml = '';

  tests = [
    `<p>
 <script>alert('Hello!')</script>
   {{Tag=Name}}
   {{Tag=Title}}
</p>`,
    `<p>
 <link rel="http://malicious-site.org" />
 {{Tag=Name}}
 {{Tag=Title}}
</p>`,
    `<p onclick="alert('Hello!')">
 {{Tag=Name}}
 {{Tag=Title}}
</p>`,
    `<p data-handler="window.location">
 {{Tag=Name}}
 {{Tag=Title}}
</p>`
  ];

  log = console.dir;

  ngOnInit(): void {
  }

  clean = () => {
    this.sanitizedCode = this.sanitizer.sanitize(SecurityContext.HTML, this.editorCode) || '';
    this.sanitizedRender = this.sanitizer.bypassSecurityTrustHtml(this.sanitizedCode) || '';
  }

  update = (e: Event) => this.editorCode = (e.target as HTMLElement).textContent || '';

}
