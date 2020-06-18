// I've replaced the existing comments from the boilerplate code with my own, but largely they're summarizing the originals.


//  Import the CSS files.
import './editor.scss';
import './style.scss';
import {TextControl} from '@wordpress/components';

// Register the block.
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'cgb/block-codepen-embed', {
	// "Block Name" -- must be a string with a namespace (cgb) prefix.
	title: __( 'Codepen Embed' ), // My block's title
	icon: 'smiley', // https://developer.wordpress.org/resource/dashicons/.
	category: 'embed', // Block category — common, formatting, layout widgets, embed, etc.
	keywords: [
		__( 'Codepen Embed' )
	],
	attributes: {
		userName: {
			type: 'string',
			default: 'robpetrin' // My Codepen Username
		},
		penSlug: {
			type: 'string',
			default: 'ExVqbGJ' // The slug (URL suffix) for the Codepen I want to show off
		},
		penTitle: {
			type: 'string',
			default: 'A Very Fancy Codepen' // An innocuous display name for the Codepen to be shown off
		}
	}, 

	// The logic/structure of the back-end editor view of this Block.
	edit: ( props ) => {

		let name = props.attributes.userName // Binding a local copy of the Codepen username
		let slug = props.attributes.penSlug // Binding a local copy of the Codepen's URL slug
		let title = props.attributes.penTitle // Binding a local copy of the Codepen's title

		
		function onChangeUserName ( content ) {
			// When a new username is provided, update this property.
			props.setAttributes({userName: content})
		}

		function onChangePenSlug ( content ) {
			// When a new slug is provided, update this property.
			props.setAttributes({penSlug: content})
		}  

		function onChangePenTitle ( content ) {
			// When a new title is provided, update this property.
			props.setAttributes({penTitle: content})
		}     

		return (
			<div>
				<p>The common format for a Codepen URL is <strong>https://codepen.io/<span>username</span>/pen/<span>slug</span></strong></p>
				<p>
					<label for="set-username">Set Codepen Username</label>
					<br />
					<TextControl
                        className={props.className} // Necessary to make the input automatically editable
                        onChange={onChangeUserName} // Callback to the function above
						value={name} // Binding the local variable to the element
						placeholder="The username of the CodePen user." // Helpful text
                    />
				</p>
				<p>
					<label for="set-slug">Set Codepen Slug</label>
					<br />
					<TextControl
                        className={props.className} // Necessary to make the input automatically editable
                        onChange={onChangePenSlug} // Callback to the function above
						value={slug} // Binding the local variable to the element
						placeholder="The seven-letter suffix at the end of the pen's URL." // Helpful text
                    />
				</p>
				<p>
					<label for="set-title">Set Codepen Title</label>
					<br />
					<TextControl
                        className={props.penTitle} // Necessary to make the input automatically editable
                        onChange={onChangePenTitle} // Callback to the function above
						value={title} // Binding the local variable to the element
						placeholder="The name of this beautiful work of art!" // Helpful text
                    />				</p>
			</div>
		);
	},

	// The structure of the front-end view
	save: ( props ) => {
		// Concatenating my URLs
		let userURL = `https://codepen.io/${props.attributes.userName}`
		let penURL = `${userURL}/pen/${props.attributes.penSlug}`

		return (
			<div>
				<p class="codepen" data-theme-id="default" data-default-tab="result" data-user={props.attributes.userName} data-slug-hash={props.attributes.penSlug} data-pen-title={props.attributes.penTitle}>
					<span>See the Pen <a href={penURL} target="_blank" rel="noopener noreferrer">
					{props.attributes.penTitle}</a> by <a href={userURL} target="_blank" rel="noopener noreferrer">@{props.attributes.userName}</a> on <a href="https://codepen.io">CodePen</a>.</span>
				</p>
				<script src="https://static.codepen.io/assets/embed/ei.js" />
			</div>
		);
	},
} );


