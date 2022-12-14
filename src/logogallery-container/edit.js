/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return { WPElement } Element to render.
 */

const ALLOWED_BLOCKS = [ 'wordpress-helfi/logogallery-item' ];
export default function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps( { className: 'grid__column grid_margin no-mt' } );
	return (
		<section { ...blockProps }>
			<div className="alignfull">
				<div className="hds-container">
					<div className="grid">
						<div className='class="grid__column l-12 grid_margin"'>
							<RichText tagName="h2" value={ attributes.heading } // Any existing content, either from the database or an attribute default
								onChange={ ( heading ) => setAttributes( { heading } ) } // Store updated content as a block attribute
								placeholder={ __( 'Heading…' ) } // Display this text before any content has been added by the user
								className="logogallery-container-header-editable"
							/>
						</div>
					</div>
					<div className="grid sponsors-wrapper">
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } orientation="horizontal" />
					</div>
				</div>
			</div>
		</section>
	);
}
