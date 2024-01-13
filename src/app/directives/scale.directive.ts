import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appScale]'
})
export class ScaleDirective {

	constructor(private element: ElementRef, private renderer: Renderer2) {
		this.renderer.addClass(this.element.nativeElement, "transition-transform");
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.renderer.addClass(this.element.nativeElement, "scale-110");
	}

	@HostListener("mouseleave") onMouseLeave() {
		this.renderer.removeClass(this.element.nativeElement, "scale-110");
	}

}