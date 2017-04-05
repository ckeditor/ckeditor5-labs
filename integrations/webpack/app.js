/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* global document, window, console */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import ArticlePreset from '@ckeditor/ckeditor5-presets/src/article';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [
		Autoformat,
		ArticlePreset
	],
	toolbar: [ 'headings', 'bold', 'italic', 'link', 'unlink', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ]
} )
.then( function( editor ) {
	window.editor = editor;
} )
.catch( function( err ) {
	console.error( err.stack );
} );
