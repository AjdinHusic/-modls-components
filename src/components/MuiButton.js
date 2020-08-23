import jss, { Component, html, css, registerComponent } from "../modls.js";
import theme from "../theme.js";
import clsx from "../clsx/dist/clsx.m.js";

const style = {
    root: {
        ...theme.typography.button,
        boxSizing: 'border-box',
        minWidth: 64,
        padding: '6px 16px',
        borderRadius: theme.shape.borderRadius,
        // transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        //     duration: theme.transitions.duration.short,
        // }),
        '&:hover': {
            textDecoration: 'none',
            // backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
            '&$disabled': {
                backgroundColor: 'transparent',
            },
        },
        '&$disabled': {
            color: theme.palette.action.disabled,
        },
    },
    /* Styles applied to the span element that wraps the children. */
    label: {
        width: '100%', // Ensure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
    },
    /* Styles applied to the root element if `variant="text"`. */
    text: {
        padding: '6px 8px',
    },
    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
            // backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
            // backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
        padding: '5px 15px',
        border: `1px solid ${
            theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
            }`,
        '&$disabled': {
            border: `1px solid ${theme.palette.action.disabledBackground}`,
        },
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
        color: theme.palette.primary.main,
        // border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
        '&:hover': {
            border: `1px solid ${theme.palette.primary.main}`,
            // backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
        color: theme.palette.secondary.main,
        // border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
        '&:hover': {
            border: `1px solid ${theme.palette.secondary.main}`,
            // backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&$disabled': {
            border: `1px solid ${theme.palette.action.disabled}`,
        },
    },
    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
        // color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&:hover': {
            backgroundColor: theme.palette.grey.A100,
            boxShadow: theme.shadows[4],
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: theme.shadows[2],
                backgroundColor: theme.palette.grey[300],
            },
            '&$disabled': {
                backgroundColor: theme.palette.action.disabledBackground,
            },
        },
        '&$focusVisible': {
            boxShadow: theme.shadows[6],
        },
        '&:active': {
            boxShadow: theme.shadows[8],
        },
        '&$disabled': {
            color: theme.palette.action.disabled,
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.action.disabledBackground,
        },
    },
    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.palette.secondary.main,
            },
        },
    },
    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
        },
        '&$focusVisible': {
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
        },
        '&$disabled': {
            boxShadow: 'none',
        },
    },
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor',
    },
    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
        padding: '4px 5px',
        //fontSize: theme.typography.pxToRem(13),
    },
    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
        padding: '8px 11px',
        //fontSize: theme.typography.pxToRem(15),
    },
    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
        padding: '3px 9px',
        //fontSize: theme.typography.pxToRem(13),
    },
    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
        padding: '7px 21px',
        //fontSize: theme.typography.pxToRem(15),
    },
    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
        padding: '4px 10px',
        //fontSize: theme.typography.pxToRem(13),
    },
    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
        padding: '8px 22px',
        //fontSize: theme.typography.pxToRem(15),
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},
    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
        width: '100%',
    },
    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
        display: 'inherit',
        marginRight: 8,
        marginLeft: -4,
        '&$iconSizeSmall': {
            marginLeft: -2,
        },
    },
    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        '&$iconSizeSmall': {
            marginRight: -2,
        },
    },
    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
        '& > *:first-child': {
            fontSize: 18,
        },
    },
    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
        '& > *:first-child': {
            fontSize: 20,
        },
    },
    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
        '& > *:first-child': {
            fontSize: 22,
        },
    },
}

const sheet = jss.createStyleSheet(style);
const { classes } = sheet;


function capitalize(string) {
    if (typeof string !== 'string') {
      throw new MuiError('Material-UI: capitalize(string) expects a string argument.');
    }  
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class MuiButton extends Component {
    static get props() {
        return {
            color: 'primary',
            size: 'medium',
            variant: 'text',
            disabled: false,
            disableElevation: false,
            disableFocusRipple: false,
            fullWidth: false,
            type: 'button',
        };
    }

    styles() {
        return css`${sheet.toString()}`;
    }

    render() {
        const {color, size, variant, disabled, disableElevation, disableFocusRipple, fullWidth, type} = this.props;
        return html`
            <button 
                class=${clsx(
                    classes.root,
                    classes[variant],
                    {
                        [classes[`${variant}${capitalize(color)}`]]: color !== 'inherit',
                        [classes[`${variant}Size${capitalize(size)}`]]: size !== 'medium',
                        [classes[`size${capitalize(size)}`]]: size !== 'medium',
                        [classes.disableElevation]: disableElevation,
                        [classes.disabled]: disabled,
                        [classes.fullWidth]: fullWidth,
                        [classes.colorInherit]: color === 'inherit',
                    }
                )}
                >
                <span class=${classes.label}>
                    ${this.contents}
                </span>
                <span class="ripple"></span>
            </button>
        `;
    }
}

registerComponent(MuiButton, "mui-button");


// .mui-button:focus {
//     background-color: rgb(17, 82, 147);
//     box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
//     text-decoration: none;
// }

// .mui-button:active {
//     box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
// }

// .mui-button {
//     margin: 8px;
//     box-shadow: rgba(0, 0, 0, .2) 0 3px 1px -2px, rgba(0, 0, 0, .14) 0 2px 2px 0, rgba(0, 0, 0, .12) 0 1px 5px 0;
//     box-sizing: border-box;
//     background-color: #1976d2;
//     color: #fff;
//     padding: 6px 16px;
//     font-size: 0.875rem;
//     min-width: 64px;
//     transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//     font-weight: 500;
//     line-height: 1.75;
//     border-radius: 4px;
//     letter-spacing: 0.02857em;
//     text-transform: uppercase;
//     border: 0;
//     cursor: pointer;
//     display: inline-flex;
//     vertical-align: middle;
//     justify-content: center;
// }

// .label {
//     width: 100%;
//     display: inherit;
//     align-items: inherit;
//     justify-content: inherit;
// }
// .ripple {
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 0;
//     overflow: hidden;
//     position: absolute;
//     border-radius: inherit;
//     pointer-events: none;
// }
// .ripple:focus {
//     outline: -webkit-focus-ring-color auto 1px;
// }`;