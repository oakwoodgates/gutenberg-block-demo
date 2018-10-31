/**
 * BLOCK: block-third
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

var el = wp.element.createElement;

registerBlockType( 'riad/alert', {
	title: 'Alert Block',
	icon: 'warning',
	category: 'common',

	attributes: {
		type: {
			type: 'string',
			default: 'danger',
		},
		message: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},

	edit: function( props ) {
		var className = props.className;
		var type = props.attributes.type;
		var message = props.attributes.message;
		function updateMessage( event ) {
			props.setAttributes( { message: event.target.value } );
		}

		return el(
			'p', 
			{ className: className + ' alert-' + type },
			el(
				'textarea',
				{ value: message, onChange: updateMessage }
			) 
		);
	},

	save: function( props ) {
		var type = props.attributes.type;
		var message = props.attributes.message;
		return el(
			'p', 
			{ className: 'alert-' + type },
			message
		);
	},
} );
