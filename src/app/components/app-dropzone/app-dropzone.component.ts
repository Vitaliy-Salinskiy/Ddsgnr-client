import { Component, Output, EventEmitter } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { DROPZONE_STYLE } from 'src/app/constants';

@Component({
	selector: 'app-dropzone',
	templateUrl: './app-dropzone.component.html',
})
export class AppDropzoneComponent {
	dropzoneStyle = DROPZONE_STYLE;

	files: File[] = [];
	imageUrls: string[] = [];
	filesError: string = "";
	isDragging: boolean = false;

	@Output() filesChanged = new EventEmitter<File[]>();

	onDragEnter(event: DragEvent) {
		this.isDragging = true;
	}

	onDragLeave(event: DragEvent) {
		if (!(event.currentTarget as Node).contains(event.relatedTarget as Node)) {
			this.isDragging = false;
		}
	}

	onSelectFile(event: NgxDropzoneChangeEvent) {
		this.filesError = ""
		for (let file of event.addedFiles) {
			if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/webp') {
				const reader = new FileReader();

				reader.onload = (e) => {
					if (typeof e.target.result === 'string') {
						this.files.push(file);
						this.imageUrls.push(e.target.result);
					}
				};

				reader.readAsDataURL(file);
			} else {
				this.filesError = 'Only .png .jpeg .jpg .webp images are allowed'
			}
		}
		this.isDragging = false;
		this.filesChanged.emit(this.files);
	}

	clearFiles() {
		this.files = [];
		this.imageUrls = [];
		this.filesError = "";
		this.filesChanged.emit(this.files);
	}
}