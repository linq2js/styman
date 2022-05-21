# `Default Styler Styles`

## All styles

[bg](#bg), [from](#from), [to](#to), [via](#via), [tracking](#tracking), [decoration](#decoration), [text](#text), [indent](#indent), [whitespace](#whitespace), [align](#align), [break](#break), [font](#font), [leading](#leading), [cursor](#cursor), [b](#b), [bl](#bl), [br](#br), [bt](#bt), [bb](#bb), [bx](#bx), [by](#by), [w](#w), [min_w](#min_w), [max_w](#max_w), [h](#h), [min_h](#min_h), [max_h](#max_h), [list](#list), [flex](#flex), [basis](#basis), [grow](#grow), [shrink](#shrink), [order](#order), [grid](#grid), [cols](#cols), [rows](#rows), [col](#col), [col_start](#col_start), [col_end](#col_end), [row](#row), [row_start](#row_start), [row_end](#row_end), [g](#g), [gx](#gx), [gy](#gy), [justify](#justify), [justify_items](#justify_items), [justify_self](#justify_self), [content](#content), [items](#items), [self](#self), [place_content](#place_content), [place_items](#place_items), [place_self](#place_self), [center](#center), [table](#table), [scale](#scale), [skew](#skew), [translate](#translate), [rotate](#rotate), [origin](#origin), [aspect](#aspect), [left](#left), [top](#top), [right](#right), [bottom](#bottom), [inset](#inset), [visible](#visible), [invisible](#invisible), [static](#static), [fixed](#fixed), [absolute](#absolute), [relative](#relative), [sticky](#sticky), [zindex](#zindex), [overscroll](#overscroll), [overflow](#overflow), [object](#object), [isolate](#isolate), [clear](#clear), [float](#float), [block](#block), [inline](#inline), [contents](#contents), [hidden](#hidden), [list_item](#list_item), [flow_root](#flow_root), [inline_block](#inline_block), [box](#box), [box_decoration](#box_decoration), [break_inside](#break_inside), [break_before](#break_before), [break_after](#break_after), [columns](#columns), [container](#container), [outline](#outline), [outline_offset](#outline_offset), [opacity](#opacity), [animate](#animate), [accent](#accent), [caret](#caret), [pointer_events](#pointer_events), [scroll](#scroll), [scrollp](#scrollp), [scrollm](#scrollm), [snap](#snap), [touch](#touch), [resize](#resize), [select](#select), [will_change](#will_change), [appearance](#appearance), [fill](#fill), [stroke](#stroke), [blur](#blur), [brightness](#brightness), [contrast](#contrast), [grayscale](#grayscale), [invert](#invert), [hue_rotate](#hue_rotate), [saturate](#saturate), [sepia](#sepia), [drop_shadow](#drop_shadow), [backdrop_blur](#backdrop_blur), [backdrop_brightness](#backdrop_brightness), [backdrop_contrast](#backdrop_contrast), [backdrop_grayscale](#backdrop_grayscale), [backdrop_invert](#backdrop_invert), [backdrop_hue_rotate](#backdrop_hue_rotate), [backdrop_saturate](#backdrop_saturate), [backdrop_opacity](#backdrop_opacity), [backdrop_sepia](#backdrop_sepia), [d](#d), [dx](#dx), [dy](#dy), [s](#s), [sx](#sx), [sy](#sy), [ml](#ml), [mr](#mr), [mb](#mb), [mt](#mt), [mx](#mx), [my](#my), [p](#p), [pl](#pl), [pt](#pt), [pr](#pr), [pb](#pb), [px](#px), [py](#py), [delay](#delay), [transition](#transition), [r](#r), [r_tl](#r_tl), [r_bl](#r_bl), [r_tr](#r_tr), [r_br](#r_br), [rt](#rt), [rl](#rl), [rb](#rb), [rr](#rr), [shadow](#shadow)

## bg

Styles: background

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/background-attachment)

| Variant        | Example                                                |
| :------------- | :----------------------------------------------------- |
| **color**      | `styler({ bg: 'red' })` or `styler({ bg: 'red-500' })` |
| fixed          | `styler({ bg: 'fixed' })`                              |
| local          | `styler({ bg: 'local' })`                              |
| scroll         | `styler({ bg: 'scroll' })`                             |
| clip-border    | `styler({ bg: 'clip-border' })`                        |
| clip-padding   | `styler({ bg: 'clip-padding' })`                       |
| clip-content   | `styler({ bg: 'clip-content' })`                       |
| clip-text      | `styler({ bg: 'clip-text' })`                          |
| origin-border  | `styler({ bg: 'origin-border' })`                      |
| origin-padding | `styler({ bg: 'origin-padding' })`                     |
| origin-content | `styler({ bg: 'origin-content' })`                     |
| inherit        | `styler({ bg: 'inherit' })`                            |
| current        | `styler({ bg: 'current' })`                            |
| bottom         | `styler({ bg: 'bottom' })`                             |
| center         | `styler({ bg: 'center' })`                             |
| left           | `styler({ bg: 'left' })`                               |
| left-bottom    | `styler({ bg: 'left-bottom' })`                        |
| left-top       | `styler({ bg: 'left-top' })`                           |
| right          | `styler({ bg: 'right' })`                              |
| right-bottom   | `styler({ bg: 'right-bottom' })`                       |
| right-top      | `styler({ bg: 'right-top' })`                          |
| top            | `styler({ bg: 'top' })`                                |
| repeat         | `styler({ bg: 'repeat' })`                             |
| no-repeat      | `styler({ bg: 'no-repeat' })`                          |
| repeat-x       | `styler({ bg: 'repeat-x' })`                           |
| repeat-y       | `styler({ bg: 'repeat-y' })`                           |
| repeat-round   | `styler({ bg: 'repeat-round' })`                       |
| repeat-space   | `styler({ bg: 'repeat-space' })`                       |
| auto           | `styler({ bg: 'auto' })`                               |
| cover          | `styler({ bg: 'cover' })`                              |
| contain        | `styler({ bg: 'contain' })`                            |
| none           | `styler({ bg: 'none' })`                               |
| gradient-to-t  | `styler({ bg: 'gradient-to-t' })`                      |
| gradient-to-tl | `styler({ bg: 'gradient-to-tl' })`                     |
| gradient-to-l  | `styler({ bg: 'gradient-to-l' })`                      |
| gradient-to-bl | `styler({ bg: 'gradient-to-bl' })`                     |
| gradient-to-b  | `styler({ bg: 'gradient-to-b' })`                      |
| gradient-to-br | `styler({ bg: 'gradient-to-br' })`                     |
| gradient-to-r  | `styler({ bg: 'gradient-to-r' })`                      |
| gradient-to-tr | `styler({ bg: 'gradient-to-tr' })`                     |

## from

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/gradient-color-stops)

| Variant   | Example                                                    |
| :-------- | :--------------------------------------------------------- |
| **color** | `styler({ from: 'red' })` or `styler({ from: 'red-500' })` |
| inherit   | `styler({ from: 'inherit' })`                              |
| current   | `styler({ from: 'current' })`                              |

## to

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/gradient-color-stops)

| Variant   | Example                                                |
| :-------- | :----------------------------------------------------- |
| **color** | `styler({ to: 'red' })` or `styler({ to: 'red-500' })` |
| inherit   | `styler({ to: 'inherit' })`                            |
| current   | `styler({ to: 'current' })`                            |

## via

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/gradient-color-stops)

| Variant   | Example                                                  |
| :-------- | :------------------------------------------------------- |
| **color** | `styler({ via: 'red' })` or `styler({ via: 'red-500' })` |
| inherit   | `styler({ via: 'inherit' })`                             |
| current   | `styler({ via: 'current' })`                             |

## tracking

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/letter-spacing)

| Variant | Example                           |
| :------ | :-------------------------------- |
| tighter | `styler({ tracking: 'tighter' })` |
| tight   | `styler({ tracking: 'tight' })`   |
| normal  | `styler({ tracking: 'normal' })`  |
| wide    | `styler({ tracking: 'wide' })`    |
| wider   | `styler({ tracking: 'wider' })`   |
| widest  | `styler({ tracking: 'widest' })`  |

## decoration

| Variant      | Example                                                                |
| :----------- | :--------------------------------------------------------------------- |
| **number**   | `styler({ decoration: 5 })`                                            |
| **color**    | `styler({ decoration: 'red' })` or `styler({ decoration: 'red-500' })` |
| no-underline | `styler({ decoration: 'no-underline' })`                               |
| underline    | `styler({ decoration: 'underline' })`                                  |
| overline     | `styler({ decoration: 'overline' })`                                   |
| line-through | `styler({ decoration: 'line-through' })`                               |
| inherit      | `styler({ decoration: 'inherit' })`                                    |
| current      | `styler({ decoration: 'current' })`                                    |
| solid        | `styler({ decoration: 'solid' })`                                      |
| double       | `styler({ decoration: 'double' })`                                     |
| dotted       | `styler({ decoration: 'dotted' })`                                     |
| dashed       | `styler({ decoration: 'dashed' })`                                     |
| wavy         | `styler({ decoration: 'wavy' })`                                       |
| auto         | `styler({ decoration: 'auto' })`                                       |
| from-font    | `styler({ decoration: 'from-font' })`                                  |

## text

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/text-color)

| Variant    | Example                                                    |
| :--------- | :--------------------------------------------------------- |
| **color**  | `styler({ text: 'red' })` or `styler({ text: 'red-500' })` |
| uppercase  | `styler({ text: 'uppercase' })`                            |
| lowercase  | `styler({ text: 'lowercase' })`                            |
| capitalize | `styler({ text: 'capitalize' })`                           |
| none       | `styler({ text: 'none' })`                                 |
| truncate   | `styler({ text: 'truncate' })`                             |
| ellipsis   | `styler({ text: 'ellipsis' })`                             |
| clip       | `styler({ text: 'clip' })`                                 |
| xs         | `styler({ text: 'xs' })`                                   |
| sm         | `styler({ text: 'sm' })`                                   |
| base       | `styler({ text: 'base' })`                                 |
| lg         | `styler({ text: 'lg' })`                                   |
| xl         | `styler({ text: 'xl' })`                                   |
| 2xl        | `styler({ text: '2xl' })`                                  |
| 3xl        | `styler({ text: '3xl' })`                                  |
| 4xl        | `styler({ text: '4xl' })`                                  |
| 5xl        | `styler({ text: '5xl' })`                                  |
| 6xl        | `styler({ text: '6xl' })`                                  |
| 7xl        | `styler({ text: '7xl' })`                                  |
| 8xl        | `styler({ text: '8xl' })`                                  |
| 9xl        | `styler({ text: '9xl' })`                                  |
| left       | `styler({ text: 'left' })`                                 |
| right      | `styler({ text: 'right' })`                                |
| center     | `styler({ text: 'center' })`                               |
| justify    | `styler({ text: 'justify' })`                              |

## indent

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/text-indent)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **number** | `styler({ indent: 5 })`    |
| px         | `styler({ indent: 'px' })` |

## whitespace

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/whitespace)

| Variant  | Example                              |
| :------- | :----------------------------------- |
| normal   | `styler({ whitespace: 'normal' })`   |
| pre      | `styler({ whitespace: 'pre' })`      |
| pre-wrap | `styler({ whitespace: 'pre-wrap' })` |
| pre-line | `styler({ whitespace: 'pre-line' })` |
| nowrap   | `styler({ whitespace: 'nowrap' })`   |

## align

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/vertical-align)

| Variant     | Example                            |
| :---------- | :--------------------------------- |
| baseline    | `styler({ align: 'baseline' })`    |
| top         | `styler({ align: 'top' })`         |
| middle      | `styler({ align: 'middle' })`      |
| bottom      | `styler({ align: 'bottom' })`      |
| text-top    | `styler({ align: 'text-top' })`    |
| text-bottom | `styler({ align: 'text-bottom' })` |
| sub         | `styler({ align: 'sub' })`         |
| super       | `styler({ align: 'super' })`       |

## break

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/word-break)

| Variant | Example                       |
| :------ | :---------------------------- |
| normal  | `styler({ break: 'normal' })` |
| words   | `styler({ break: 'words' })`  |
| all     | `styler({ break: 'all' })`    |

## font

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/font-family)

| Variant              | Example                                    |
| :------------------- | :----------------------------------------- |
| sans                 | `styler({ font: 'sans' })`                 |
| serif                | `styler({ font: 'serif' })`                |
| mono                 | `styler({ font: 'mono' })`                 |
| antialiased          | `styler({ font: 'antialiased' })`          |
| subpixel-antialiased | `styler({ font: 'subpixel-antialiased' })` |
| normal-nums          | `styler({ font: 'normal-nums' })`          |
| ordinal              | `styler({ font: 'ordinal' })`              |
| slashed-zero         | `styler({ font: 'slashed-zero' })`         |
| lining-nums          | `styler({ font: 'lining-nums' })`          |
| oldstyle-nums        | `styler({ font: 'oldstyle-nums' })`        |
| proportional-nums    | `styler({ font: 'proportional-nums' })`    |
| tabular-nums         | `styler({ font: 'tabular-nums' })`         |
| diagonal-fractions   | `styler({ font: 'diagonal-fractions' })`   |
| stacked-fractions    | `styler({ font: 'stacked-fractions' })`    |
| italic               | `styler({ font: 'italic' })`               |
| non-italic           | `styler({ font: 'non-italic' })`           |
| thin                 | `styler({ font: 'thin' })`                 |
| extraLight           | `styler({ font: 'extraLight' })`           |
| light                | `styler({ font: 'light' })`                |
| normal               | `styler({ font: 'normal' })`               |
| medium               | `styler({ font: 'medium' })`               |
| semiBold             | `styler({ font: 'semiBold' })`             |
| bold                 | `styler({ font: 'bold' })`                 |
| extraBold            | `styler({ font: 'extraBold' })`            |
| black                | `styler({ font: 'black' })`                |
| xs                   | `styler({ font: 'xs' })`                   |
| sm                   | `styler({ font: 'sm' })`                   |
| base                 | `styler({ font: 'base' })`                 |
| lg                   | `styler({ font: 'lg' })`                   |
| xl                   | `styler({ font: 'xl' })`                   |
| 2xl                  | `styler({ font: '2xl' })`                  |
| 3xl                  | `styler({ font: '3xl' })`                  |
| 4xl                  | `styler({ font: '4xl' })`                  |
| 5xl                  | `styler({ font: '5xl' })`                  |
| 6xl                  | `styler({ font: '6xl' })`                  |
| 7xl                  | `styler({ font: '7xl' })`                  |
| 8xl                  | `styler({ font: '8xl' })`                  |
| 9xl                  | `styler({ font: '9xl' })`                  |

## leading

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/line-height)

| Variant    | Example                          |
| :--------- | :------------------------------- |
| **number** | `styler({ leading: 5 })`         |
| none       | `styler({ leading: 'none' })`    |
| tight      | `styler({ leading: 'tight' })`   |
| snug       | `styler({ leading: 'snug' })`    |
| normal     | `styler({ leading: 'normal' })`  |
| relaxed    | `styler({ leading: 'relaxed' })` |
| loose      | `styler({ leading: 'loose' })`   |

## cursor

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/cursor)

| Variant       | Example                               |
| :------------ | :------------------------------------ |
| auto          | `styler({ cursor: 'auto' })`          |
| default       | `styler({ cursor: 'default' })`       |
| pointer       | `styler({ cursor: 'pointer' })`       |
| wait          | `styler({ cursor: 'wait' })`          |
| text          | `styler({ cursor: 'text' })`          |
| move          | `styler({ cursor: 'move' })`          |
| help          | `styler({ cursor: 'help' })`          |
| not-allowed   | `styler({ cursor: 'not-allowed' })`   |
| none          | `styler({ cursor: 'none' })`          |
| context-menu  | `styler({ cursor: 'context-menu' })`  |
| progress      | `styler({ cursor: 'progress' })`      |
| cell          | `styler({ cursor: 'cell' })`          |
| crosshair     | `styler({ cursor: 'crosshair' })`     |
| vertical-text | `styler({ cursor: 'vertical-text' })` |
| alias         | `styler({ cursor: 'alias' })`         |
| copy          | `styler({ cursor: 'copy' })`          |
| no-drop       | `styler({ cursor: 'no-drop' })`       |
| grab          | `styler({ cursor: 'grab' })`          |
| grabbing      | `styler({ cursor: 'grabbing' })`      |
| all-scroll    | `styler({ cursor: 'all-scroll' })`    |
| col-resize    | `styler({ cursor: 'col-resize' })`    |
| row-resize    | `styler({ cursor: 'row-resize' })`    |
| n-resize      | `styler({ cursor: 'n-resize' })`      |
| e-resize      | `styler({ cursor: 'e-resize' })`      |
| s-resize      | `styler({ cursor: 's-resize' })`      |
| w-resize      | `styler({ cursor: 'w-resize' })`      |
| ne-resize     | `styler({ cursor: 'ne-resize' })`     |
| se-resize     | `styler({ cursor: 'se-resize' })`     |
| sw-resize     | `styler({ cursor: 'sw-resize' })`     |
| ew-resize     | `styler({ cursor: 'ew-resize' })`     |
| ns-resize     | `styler({ cursor: 'ns-resize' })`     |
| nesw-resize   | `styler({ cursor: 'nesw-resize' })`   |
| zoom-in       | `styler({ cursor: 'zoom-in' })`       |
| zoom-out      | `styler({ cursor: 'zoom-out' })`      |

## b

Styles: border

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                              |
| :--------- | :--------------------------------------------------- |
| **number** | `styler({ b: 5 })`                                   |
| **color**  | `styler({ b: 'red' })` or `styler({ b: 'red-500' })` |
| solid      | `styler({ b: 'solid' })`                             |
| dashed     | `styler({ b: 'dashed' })`                            |
| dotted     | `styler({ b: 'dotted' })`                            |
| double     | `styler({ b: 'double' })`                            |
| hidden     | `styler({ b: 'hidden' })`                            |

## bl

Styles: borderLeft

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ bl: 5 })`                                    |
| **color**  | `styler({ bl: 'red' })` or `styler({ bl: 'red-500' })` |
| solid      | `styler({ bl: 'solid' })`                              |
| dashed     | `styler({ bl: 'dashed' })`                             |
| dotted     | `styler({ bl: 'dotted' })`                             |
| double     | `styler({ bl: 'double' })`                             |
| hidden     | `styler({ bl: 'hidden' })`                             |

## br

Styles: borderRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ br: 5 })`                                    |
| **color**  | `styler({ br: 'red' })` or `styler({ br: 'red-500' })` |
| solid      | `styler({ br: 'solid' })`                              |
| dashed     | `styler({ br: 'dashed' })`                             |
| dotted     | `styler({ br: 'dotted' })`                             |
| double     | `styler({ br: 'double' })`                             |
| hidden     | `styler({ br: 'hidden' })`                             |

## bt

Styles: borderTop

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ bt: 5 })`                                    |
| **color**  | `styler({ bt: 'red' })` or `styler({ bt: 'red-500' })` |
| solid      | `styler({ bt: 'solid' })`                              |
| dashed     | `styler({ bt: 'dashed' })`                             |
| dotted     | `styler({ bt: 'dotted' })`                             |
| double     | `styler({ bt: 'double' })`                             |
| hidden     | `styler({ bt: 'hidden' })`                             |

## bb

Styles: borderBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ bb: 5 })`                                    |
| **color**  | `styler({ bb: 'red' })` or `styler({ bb: 'red-500' })` |
| solid      | `styler({ bb: 'solid' })`                              |
| dashed     | `styler({ bb: 'dashed' })`                             |
| dotted     | `styler({ bb: 'dotted' })`                             |
| double     | `styler({ bb: 'double' })`                             |
| hidden     | `styler({ bb: 'hidden' })`                             |

## bx

Styles: borderLeft, borderRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ bx: 5 })`                                    |
| **color**  | `styler({ bx: 'red' })` or `styler({ bx: 'red-500' })` |
| solid      | `styler({ bx: 'solid' })`                              |
| dashed     | `styler({ bx: 'dashed' })`                             |
| dotted     | `styler({ bx: 'dotted' })`                             |
| double     | `styler({ bx: 'double' })`                             |
| hidden     | `styler({ bx: 'hidden' })`                             |

## by

Styles: borderTop, borderBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ by: 5 })`                                    |
| **color**  | `styler({ by: 'red' })` or `styler({ by: 'red-500' })` |
| solid      | `styler({ by: 'solid' })`                              |
| dashed     | `styler({ by: 'dashed' })`                             |
| dotted     | `styler({ by: 'dotted' })`                             |
| double     | `styler({ by: 'double' })`                             |
| hidden     | `styler({ by: 'hidden' })`                             |

## w

Styles: width

| Variant    | Example                   |
| :--------- | :------------------------ |
| **A/B**    | `styler({ w: '1/2' })`    |
| **number** | `styler({ w: 5 })`        |
| screen     | `styler({ w: 'screen' })` |
| px         | `styler({ w: 'px' })`     |
| auto       | `styler({ w: 'auto' })`   |
| full       | `styler({ w: 'full' })`   |
| min        | `styler({ w: 'min' })`    |
| max        | `styler({ w: 'max' })`    |
| fit        | `styler({ w: 'fit' })`    |

## min_w

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **A/B**    | `styler({ min_w: '1/2' })`    |
| **number** | `styler({ min_w: 5 })`        |
| screen     | `styler({ min_w: 'screen' })` |
| min        | `styler({ min_w: 'min' })`    |
| max        | `styler({ min_w: 'max' })`    |
| fit        | `styler({ min_w: 'fit' })`    |
| full       | `styler({ min_w: 'full' })`   |

## max_w

| Variant    | Example                           |
| :--------- | :-------------------------------- |
| **A/B**    | `styler({ max_w: '1/2' })`        |
| **number** | `styler({ max_w: 5 })`            |
| screen     | `styler({ max_w: 'screen' })`     |
| min        | `styler({ max_w: 'min' })`        |
| max        | `styler({ max_w: 'max' })`        |
| fit        | `styler({ max_w: 'fit' })`        |
| full       | `styler({ max_w: 'full' })`       |
| none       | `styler({ max_w: 'none' })`       |
| prose      | `styler({ max_w: 'prose' })`      |
| xs         | `styler({ max_w: 'xs' })`         |
| sm         | `styler({ max_w: 'sm' })`         |
| md         | `styler({ max_w: 'md' })`         |
| lg         | `styler({ max_w: 'lg' })`         |
| xl         | `styler({ max_w: 'xl' })`         |
| 2xl        | `styler({ max_w: '2xl' })`        |
| 3xl        | `styler({ max_w: '3xl' })`        |
| 4xl        | `styler({ max_w: '4xl' })`        |
| 5xl        | `styler({ max_w: '5xl' })`        |
| 6xl        | `styler({ max_w: '6xl' })`        |
| 7xl        | `styler({ max_w: '7xl' })`        |
| screen-sm  | `styler({ max_w: 'screen-sm' })`  |
| screen-md  | `styler({ max_w: 'screen-md' })`  |
| screen-lg  | `styler({ max_w: 'screen-lg' })`  |
| screen-xl  | `styler({ max_w: 'screen-xl' })`  |
| screen-2xl | `styler({ max_w: 'screen-2xl' })` |

## h

Styles: height

| Variant    | Example                   |
| :--------- | :------------------------ |
| **A/B**    | `styler({ h: '1/2' })`    |
| **number** | `styler({ h: 5 })`        |
| screen     | `styler({ h: 'screen' })` |
| px         | `styler({ h: 'px' })`     |
| auto       | `styler({ h: 'auto' })`   |
| full       | `styler({ h: 'full' })`   |
| min        | `styler({ h: 'min' })`    |
| max        | `styler({ h: 'max' })`    |
| fit        | `styler({ h: 'fit' })`    |

## min_h

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **A/B**    | `styler({ min_h: '1/2' })`    |
| **number** | `styler({ min_h: 5 })`        |
| screen     | `styler({ min_h: 'screen' })` |
| min        | `styler({ min_h: 'min' })`    |
| max        | `styler({ min_h: 'max' })`    |
| fit        | `styler({ min_h: 'fit' })`    |
| full       | `styler({ min_h: 'full' })`   |

## max_h

| Variant    | Example                           |
| :--------- | :-------------------------------- |
| **A/B**    | `styler({ max_h: '1/2' })`        |
| **number** | `styler({ max_h: 5 })`            |
| screen     | `styler({ max_h: 'screen' })`     |
| min        | `styler({ max_h: 'min' })`        |
| max        | `styler({ max_h: 'max' })`        |
| fit        | `styler({ max_h: 'fit' })`        |
| full       | `styler({ max_h: 'full' })`       |
| none       | `styler({ max_h: 'none' })`       |
| prose      | `styler({ max_h: 'prose' })`      |
| xs         | `styler({ max_h: 'xs' })`         |
| sm         | `styler({ max_h: 'sm' })`         |
| md         | `styler({ max_h: 'md' })`         |
| lg         | `styler({ max_h: 'lg' })`         |
| xl         | `styler({ max_h: 'xl' })`         |
| 2xl        | `styler({ max_h: '2xl' })`        |
| 3xl        | `styler({ max_h: '3xl' })`        |
| 4xl        | `styler({ max_h: '4xl' })`        |
| 5xl        | `styler({ max_h: '5xl' })`        |
| 6xl        | `styler({ max_h: '6xl' })`        |
| 7xl        | `styler({ max_h: '7xl' })`        |
| screen-sm  | `styler({ max_h: 'screen-sm' })`  |
| screen-md  | `styler({ max_h: 'screen-md' })`  |
| screen-lg  | `styler({ max_h: 'screen-lg' })`  |
| screen-xl  | `styler({ max_h: 'screen-xl' })`  |
| screen-2xl | `styler({ max_h: 'screen-2xl' })` |

## list

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/list-style-type)

| Variant | Example                       |
| :------ | :---------------------------- |
| inside  | `styler({ list: 'inside' })`  |
| outside | `styler({ list: 'outside' })` |
| none    | `styler({ list: 'none' })`    |
| disc    | `styler({ list: 'disc' })`    |
| decimal | `styler({ list: 'decimal' })` |

## flex

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/flex)

| Variant      | Example                            |
| :----------- | :--------------------------------- |
| **true**     | `styler({ flex: true })`           |
| **number**   | `styler({ flex: 5 })`              |
| 1            | `styler({ flex: '1' })`            |
| none         | `styler({ flex: 'none' })`         |
| auto         | `styler({ flex: 'auto' })`         |
| initial      | `styler({ flex: 'initial' })`      |
| inline       | `styler({ flex: 'inline' })`       |
| row          | `styler({ flex: 'row' })`          |
| row-reverse  | `styler({ flex: 'row-reverse' })`  |
| col          | `styler({ flex: 'col' })`          |
| col-reverse  | `styler({ flex: 'col-reverse' })`  |
| wrap         | `styler({ flex: 'wrap' })`         |
| wrap-reverse | `styler({ flex: 'wrap-reverse' })` |
| nowrap       | `styler({ flex: 'nowrap' })`       |

## basis

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/flex-basis)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **A/B**    | `styler({ basis: '1/2' })`  |
| **number** | `styler({ basis: 5 })`      |
| auto       | `styler({ basis: 'auto' })` |
| full       | `styler({ basis: 'full' })` |
| px         | `styler({ basis: 'px' })`   |

## grow

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/flex-grow)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **true**   | `styler({ grow: true })` |
| **number** | `styler({ grow: 5 })`    |

## shrink

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/flex-shrink)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **true**   | `styler({ shrink: true })` |
| **number** | `styler({ shrink: 5 })`    |

## order

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/flex-order)

| Variant    | Example                      |
| :--------- | :--------------------------- |
| **number** | `styler({ order: 5 })`       |
| first      | `styler({ order: 'first' })` |
| last       | `styler({ order: 'last' })`  |
| none       | `styler({ order: 'none' })`  |

## grid

| Variant   | Example                         |
| :-------- | :------------------------------ |
| **true**  | `styler({ grid: true })`        |
| inline    | `styler({ grid: 'inline' })`    |
| row       | `styler({ grid: 'row' })`       |
| col       | `styler({ grid: 'col' })`       |
| row-dense | `styler({ grid: 'row-dense' })` |
| col-dense | `styler({ grid: 'col-dense' })` |

## cols

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-template-columns)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **number** | `styler({ cols: 5 })`      |
| none       | `styler({ cols: 'none' })` |
| auto       | `styler({ cols: 'auto' })` |
| min        | `styler({ cols: 'min' })`  |
| max        | `styler({ cols: 'max' })`  |
| fr         | `styler({ cols: 'fr' })`   |

## rows

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-template-rows)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **number** | `styler({ rows: 5 })`      |
| none       | `styler({ rows: 'none' })` |
| auto       | `styler({ rows: 'auto' })` |
| min        | `styler({ rows: 'min' })`  |
| max        | `styler({ rows: 'max' })`  |
| fr         | `styler({ rows: 'fr' })`   |

## col

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-column)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **number** | `styler({ col: 5 })`      |
| auto       | `styler({ col: 'auto' })` |
| full       | `styler({ col: 'full' })` |

## col_start

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-column)

| Variant    | Example                         |
| :--------- | :------------------------------ |
| **number** | `styler({ col_start: 5 })`      |
| auto       | `styler({ col_start: 'auto' })` |

## col_end

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-column)

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **number** | `styler({ col_end: 5 })`      |
| auto       | `styler({ col_end: 'auto' })` |

## row

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-row)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **number** | `styler({ row: 5 })`      |
| auto       | `styler({ row: 'auto' })` |
| full       | `styler({ row: 'full' })` |

## row_start

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-row)

| Variant    | Example                         |
| :--------- | :------------------------------ |
| **number** | `styler({ row_start: 5 })`      |
| auto       | `styler({ row_start: 'auto' })` |

## row_end

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grid-row)

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **number** | `styler({ row_end: 5 })`      |
| auto       | `styler({ row_end: 'auto' })` |

## g

| Variant    | Example               |
| :--------- | :-------------------- |
| **number** | `styler({ g: 5 })`    |
| px         | `styler({ g: 'px' })` |

## gx

| Variant    | Example                |
| :--------- | :--------------------- |
| **number** | `styler({ gx: 5 })`    |
| px         | `styler({ gx: 'px' })` |

## gy

| Variant    | Example                |
| :--------- | :--------------------- |
| **number** | `styler({ gy: 5 })`    |
| px         | `styler({ gy: 'px' })` |

## justify

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/justify-content)

| Variant | Example                          |
| :------ | :------------------------------- |
| start   | `styler({ justify: 'start' })`   |
| end     | `styler({ justify: 'end' })`     |
| center  | `styler({ justify: 'center' })`  |
| between | `styler({ justify: 'between' })` |
| around  | `styler({ justify: 'around' })`  |
| evenly  | `styler({ justify: 'evenly' })`  |

## justify_items

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/justify-items)

| Variant | Example                                |
| :------ | :------------------------------------- |
| start   | `styler({ justify_items: 'start' })`   |
| end     | `styler({ justify_items: 'end' })`     |
| center  | `styler({ justify_items: 'center' })`  |
| stretch | `styler({ justify_items: 'stretch' })` |

## justify_self

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/justify-self)

| Variant | Example                               |
| :------ | :------------------------------------ |
| auto    | `styler({ justify_self: 'auto' })`    |
| start   | `styler({ justify_self: 'start' })`   |
| end     | `styler({ justify_self: 'end' })`     |
| center  | `styler({ justify_self: 'center' })`  |
| stretch | `styler({ justify_self: 'stretch' })` |

## content

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/content)

| Variant | Example                          |
| :------ | :------------------------------- |
| start   | `styler({ content: 'start' })`   |
| end     | `styler({ content: 'end' })`     |
| center  | `styler({ content: 'center' })`  |
| between | `styler({ content: 'between' })` |
| around  | `styler({ content: 'around' })`  |
| evenly  | `styler({ content: 'evenly' })`  |

## items

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/align-items)

| Variant  | Example                         |
| :------- | :------------------------------ |
| start    | `styler({ items: 'start' })`    |
| end      | `styler({ items: 'end' })`      |
| center   | `styler({ items: 'center' })`   |
| stretch  | `styler({ items: 'stretch' })`  |
| baseline | `styler({ items: 'baseline' })` |

## self

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/align-self)

| Variant  | Example                        |
| :------- | :----------------------------- |
| auto     | `styler({ self: 'auto' })`     |
| start    | `styler({ self: 'start' })`    |
| end      | `styler({ self: 'end' })`      |
| center   | `styler({ self: 'center' })`   |
| stretch  | `styler({ self: 'stretch' })`  |
| baseline | `styler({ self: 'baseline' })` |

## place_content

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/place-content)

| Variant | Example                                |
| :------ | :------------------------------------- |
| start   | `styler({ place_content: 'start' })`   |
| end     | `styler({ place_content: 'end' })`     |
| center  | `styler({ place_content: 'center' })`  |
| stretch | `styler({ place_content: 'stretch' })` |
| between | `styler({ place_content: 'between' })` |
| around  | `styler({ place_content: 'around' })`  |
| evenly  | `styler({ place_content: 'evenly' })`  |

## place_items

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/place-items)

| Variant | Example                              |
| :------ | :----------------------------------- |
| start   | `styler({ place_items: 'start' })`   |
| end     | `styler({ place_items: 'end' })`     |
| center  | `styler({ place_items: 'center' })`  |
| stretch | `styler({ place_items: 'stretch' })` |

## place_self

| Variant | Example                             |
| :------ | :---------------------------------- |
| auto    | `styler({ place_self: 'auto' })`    |
| start   | `styler({ place_self: 'start' })`   |
| end     | `styler({ place_self: 'end' })`     |
| center  | `styler({ place_self: 'center' })`  |
| stretch | `styler({ place_self: 'stretch' })` |

## center

| Variant  | Example                    |
| :------- | :------------------------- |
| **true** | `styler({ center: true })` |
| x        | `styler({ center: 'x' })`  |
| y        | `styler({ center: 'y' })`  |

## table

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/table-layout)

| Variant      | Example                             |
| :----------- | :---------------------------------- |
| **true**     | `styler({ table: true })`           |
| column       | `styler({ table: 'column' })`       |
| row          | `styler({ table: 'row' })`          |
| inline       | `styler({ table: 'inline' })`       |
| cell         | `styler({ table: 'cell' })`         |
| caption      | `styler({ table: 'caption' })`      |
| column-group | `styler({ table: 'column-group' })` |
| footer-group | `styler({ table: 'footer-group' })` |
| header-group | `styler({ table: 'header-group' })` |
| row-group    | `styler({ table: 'row-group' })`    |
| collapse     | `styler({ table: 'collapse' })`     |
| separate     | `styler({ table: 'separate' })`     |
| auto         | `styler({ table: 'auto' })`         |
| fixed        | `styler({ table: 'fixed' })`        |

## scale

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/scale)

| Variant    | Example                |
| :--------- | :--------------------- |
| **number** | `styler({ scale: 5 })` |

## skew

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/skew)

| Variant    | Example               |
| :--------- | :-------------------- |
| **number** | `styler({ skew: 5 })` |

## translate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/translate)

| Variant    | Example                         |
| :--------- | :------------------------------ |
| **A/B**    | `styler({ translate: '1/2' })`  |
| **number** | `styler({ translate: 5 })`      |
| px         | `styler({ translate: 'px' })`   |
| full       | `styler({ translate: 'full' })` |

## rotate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/rotate)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **number** | `styler({ rotate: 5 })` |

## origin

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/transform-origin)

| Variant | Example                        |
| :------ | :----------------------------- |
| center  | `styler({ origin: 'center' })` |
| left    | `styler({ origin: 'left' })`   |
| top     | `styler({ origin: 'top' })`    |
| bottom  | `styler({ origin: 'bottom' })` |
| right   | `styler({ origin: 'right' })`  |

## aspect

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/aspect-ratio)

| Variant    | Example                              |
| :--------- | :----------------------------------- |
| **string** | `styler({ aspect: 'string-value' })` |
| auto       | `styler({ aspect: 'auto' })`         |
| squared    | `styler({ aspect: 'squared' })`      |
| video      | `styler({ aspect: 'video' })`        |

## left

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/top-right-bottom-left)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **A/B**    | `styler({ left: '1/2' })` |
| **number** | `styler({ left: 5 })`     |

## top

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/top-right-bottom-left)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ top: '1/2' })` |
| **number** | `styler({ top: 5 })`     |

## right

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/top-right-bottom-left)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ right: '1/2' })` |
| **number** | `styler({ right: 5 })`     |

## bottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/top-right-bottom-left)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **A/B**    | `styler({ bottom: '1/2' })` |
| **number** | `styler({ bottom: 5 })`     |

## inset

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ inset: '1/2' })` |
| **number** | `styler({ inset: 5 })`     |

## visible

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/visibility)

| Variant  | Example                     |
| :------- | :-------------------------- |
| **true** | `styler({ visible: true })` |

## invisible

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/visibility)

| Variant  | Example                       |
| :------- | :---------------------------- |
| **true** | `styler({ invisible: true })` |

## static

| Variant  | Example                    |
| :------- | :------------------------- |
| **true** | `styler({ static: true })` |

## fixed

| Variant  | Example                   |
| :------- | :------------------------ |
| **true** | `styler({ fixed: true })` |

## absolute

| Variant  | Example                      |
| :------- | :--------------------------- |
| **true** | `styler({ absolute: true })` |

## relative

| Variant  | Example                      |
| :------- | :--------------------------- |
| **true** | `styler({ relative: true })` |

## sticky

| Variant  | Example                    |
| :------- | :------------------------- |
| **true** | `styler({ sticky: true })` |

## zindex

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/z-index)

| Variant    | Example                      |
| :--------- | :--------------------------- |
| **number** | `styler({ zindex: 5 })`      |
| auto       | `styler({ zindex: 'auto' })` |

## overscroll

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/overscroll-behavior)

| Variant | Example                             |
| :------ | :---------------------------------- |
| auto    | `styler({ overscroll: 'auto' })`    |
| contain | `styler({ overscroll: 'contain' })` |
| none    | `styler({ overscroll: 'none' })`    |

## overflow

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/overflow)

| Variant | Example                           |
| :------ | :-------------------------------- |
| auto    | `styler({ overflow: 'auto' })`    |
| hidden  | `styler({ overflow: 'hidden' })`  |
| clip    | `styler({ overflow: 'clip' })`    |
| visible | `styler({ overflow: 'visible' })` |
| scroll  | `styler({ overflow: 'scroll' })`  |

## object

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/object-position)

| Variant    | Example                            |
| :--------- | :--------------------------------- |
| center     | `styler({ object: 'center' })`     |
| left       | `styler({ object: 'left' })`       |
| top        | `styler({ object: 'top' })`        |
| bottom     | `styler({ object: 'bottom' })`     |
| right      | `styler({ object: 'right' })`      |
| contain    | `styler({ object: 'contain' })`    |
| cover      | `styler({ object: 'cover' })`      |
| fill       | `styler({ object: 'fill' })`       |
| none       | `styler({ object: 'none' })`       |
| scale-down | `styler({ object: 'scale-down' })` |
| string     | `styler({ object: 'string' })`     |

## isolate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/isolation)

| Variant  | Example                       |
| :------- | :---------------------------- |
| **true** | `styler({ isolate: true })`   |
| auto     | `styler({ isolate: 'auto' })` |

## clear

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/clear)

| Variant | Example                      |
| :------ | :--------------------------- |
| left    | `styler({ clear: 'left' })`  |
| right   | `styler({ clear: 'right' })` |
| both    | `styler({ clear: 'both' })`  |
| none    | `styler({ clear: 'none' })`  |

## float

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/float)

| Variant | Example                      |
| :------ | :--------------------------- |
| left    | `styler({ float: 'left' })`  |
| right   | `styler({ float: 'right' })` |
| none    | `styler({ float: 'none' })`  |

## block

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                   |
| :------- | :------------------------ |
| **true** | `styler({ block: true })` |

## inline

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                    |
| :------- | :------------------------- |
| **true** | `styler({ inline: true })` |

## contents

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                      |
| :------- | :--------------------------- |
| **true** | `styler({ contents: true })` |

## hidden

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                    |
| :------- | :------------------------- |
| **true** | `styler({ hidden: true })` |

## list_item

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                       |
| :------- | :---------------------------- |
| **true** | `styler({ list_item: true })` |

## flow_root

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                       |
| :------- | :---------------------------- |
| **true** | `styler({ flow_root: true })` |

## inline_block

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/display)

| Variant  | Example                          |
| :------- | :------------------------------- |
| **true** | `styler({ inline_block: true })` |

## box

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/box-sizing)

| Variant | Example                      |
| :------ | :--------------------------- |
| border  | `styler({ box: 'border' })`  |
| content | `styler({ box: 'content' })` |

## box_decoration

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/box-decoration-break)

| Variant | Example                               |
| :------ | :------------------------------------ |
| clone   | `styler({ box_decoration: 'clone' })` |
| slice   | `styler({ box_decoration: 'slice' })` |

## break_inside

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/break-inside)

| Variant      | Example                                    |
| :----------- | :----------------------------------------- |
| auto         | `styler({ break_inside: 'auto' })`         |
| avoid        | `styler({ break_inside: 'avoid' })`        |
| avoid-page   | `styler({ break_inside: 'avoid-page' })`   |
| avoid-column | `styler({ break_inside: 'avoid-column' })` |

## break_before

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/break-before)

| Variant    | Example                                  |
| :--------- | :--------------------------------------- |
| auto       | `styler({ break_before: 'auto' })`       |
| avoid      | `styler({ break_before: 'avoid' })`      |
| avoid-page | `styler({ break_before: 'avoid-page' })` |
| all        | `styler({ break_before: 'all' })`        |
| page       | `styler({ break_before: 'page' })`       |
| left       | `styler({ break_before: 'left' })`       |
| right      | `styler({ break_before: 'right' })`      |
| column     | `styler({ break_before: 'column' })`     |

## break_after

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/break-after)

| Variant    | Example                                 |
| :--------- | :-------------------------------------- |
| auto       | `styler({ break_after: 'auto' })`       |
| avoid      | `styler({ break_after: 'avoid' })`      |
| avoid-page | `styler({ break_after: 'avoid-page' })` |
| all        | `styler({ break_after: 'all' })`        |
| page       | `styler({ break_after: 'page' })`       |
| left       | `styler({ break_after: 'left' })`       |
| right      | `styler({ break_after: 'right' })`      |
| column     | `styler({ break_after: 'column' })`     |

## columns

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/columns)

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **number** | `styler({ columns: 5 })`      |
| auto       | `styler({ columns: 'auto' })` |
| 3xs        | `styler({ columns: '3xs' })`  |
| 2xs        | `styler({ columns: '2xs' })`  |
| xs         | `styler({ columns: 'xs' })`   |
| sm         | `styler({ columns: 'sm' })`   |
| md         | `styler({ columns: 'md' })`   |
| lg         | `styler({ columns: 'lg' })`   |
| xl         | `styler({ columns: 'xl' })`   |
| 2xl        | `styler({ columns: '2xl' })`  |
| 3xl        | `styler({ columns: '3xl' })`  |
| 4xl        | `styler({ columns: '4xl' })`  |
| 5xl        | `styler({ columns: '5xl' })`  |
| 6xl        | `styler({ columns: '6xl' })`  |
| 7xl        | `styler({ columns: '7xl' })`  |

## container

| Variant  | Example                       |
| :------- | :---------------------------- |
| **true** | `styler({ container: true })` |

## outline

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/outline-width)

| Variant    | Example                                                          |
| :--------- | :--------------------------------------------------------------- |
| **true**   | `styler({ outline: true })`                                      |
| **number** | `styler({ outline: 5 })`                                         |
| **color**  | `styler({ outline: 'red' })` or `styler({ outline: 'red-500' })` |
| dashed     | `styler({ outline: 'dashed' })`                                  |
| dotted     | `styler({ outline: 'dotted' })`                                  |
| double     | `styler({ outline: 'double' })`                                  |
| hidden     | `styler({ outline: 'hidden' })`                                  |
| none       | `styler({ outline: 'none' })`                                    |

## outline_offset

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/outline-offset)

| Variant    | Example                         |
| :--------- | :------------------------------ |
| **number** | `styler({ outline_offset: 5 })` |

## opacity

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/opacity)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **number** | `styler({ opacity: 5 })` |

## animate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/animation)

| Variant | Example                         |
| :------ | :------------------------------ |
| none    | `styler({ animate: 'none' })`   |
| spin    | `styler({ animate: 'spin' })`   |
| ping    | `styler({ animate: 'ping' })`   |
| pulse   | `styler({ animate: 'pulse' })`  |
| bounce  | `styler({ animate: 'bounce' })` |

## accent

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/accent-color)

| Variant   | Example                                                        |
| :-------- | :------------------------------------------------------------- |
| **color** | `styler({ accent: 'red' })` or `styler({ accent: 'red-500' })` |
| inherit   | `styler({ accent: 'inherit' })`                                |
| current   | `styler({ accent: 'current' })`                                |

## caret

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/caret-color)

| Variant   | Example                                                      |
| :-------- | :----------------------------------------------------------- |
| **color** | `styler({ caret: 'red' })` or `styler({ caret: 'red-500' })` |
| inherit   | `styler({ caret: 'inherit' })`                               |
| current   | `styler({ caret: 'current' })`                               |

## pointer_events

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pointer-events)

| Variant | Example                              |
| :------ | :----------------------------------- |
| none    | `styler({ pointer_events: 'none' })` |
| auto    | `styler({ pointer_events: 'auto' })` |

## scroll

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/scroll-behavior)

| Variant | Example                        |
| :------ | :----------------------------- |
| smooth  | `styler({ scroll: 'smooth' })` |
| auto    | `styler({ scroll: 'auto' })`   |

## scrollp

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/scroll-padding)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **number** | `styler({ scrollp: 5 })` |

## scrollm

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/scroll-margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **number** | `styler({ scrollm: 5 })` |

## snap

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/scroll-snap-align)

| Variant    | Example                          |
| :--------- | :------------------------------- |
| mandatory  | `styler({ snap: 'mandatory' })`  |
| proximity  | `styler({ snap: 'proximity' })`  |
| start      | `styler({ snap: 'start' })`      |
| end        | `styler({ snap: 'end' })`        |
| center     | `styler({ snap: 'center' })`     |
| align-none | `styler({ snap: 'align-none' })` |
| normal     | `styler({ snap: 'normal' })`     |
| always     | `styler({ snap: 'always' })`     |
| none       | `styler({ snap: 'none' })`       |
| x          | `styler({ snap: 'x' })`          |
| y          | `styler({ snap: 'y' })`          |
| both       | `styler({ snap: 'both' })`       |

## touch

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/touch-action)

| Variant      | Example                             |
| :----------- | :---------------------------------- |
| auto         | `styler({ touch: 'auto' })`         |
| none         | `styler({ touch: 'none' })`         |
| pan-x        | `styler({ touch: 'pan-x' })`        |
| pan-y        | `styler({ touch: 'pan-y' })`        |
| pan-left     | `styler({ touch: 'pan-left' })`     |
| pan-right    | `styler({ touch: 'pan-right' })`    |
| pan-up       | `styler({ touch: 'pan-up' })`       |
| pan-down     | `styler({ touch: 'pan-down' })`     |
| pinch-zoom   | `styler({ touch: 'pinch-zoom' })`   |
| manipulation | `styler({ touch: 'manipulation' })` |

## resize

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/resize)

| Variant  | Example                      |
| :------- | :--------------------------- |
| **true** | `styler({ resize: true })`   |
| none     | `styler({ resize: 'none' })` |
| x        | `styler({ resize: 'x' })`    |
| y        | `styler({ resize: 'y' })`    |

## select

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/user-select)

| Variant | Example                      |
| :------ | :--------------------------- |
| none    | `styler({ select: 'none' })` |
| text    | `styler({ select: 'text' })` |
| all     | `styler({ select: 'all' })`  |
| auto    | `styler({ select: 'auto' })` |

## will_change

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/will-change)

| Variant   | Example                                |
| :-------- | :------------------------------------- |
| auto      | `styler({ will_change: 'auto' })`      |
| scroll    | `styler({ will_change: 'scroll' })`    |
| contents  | `styler({ will_change: 'contents' })`  |
| transform | `styler({ will_change: 'transform' })` |

## appearance

| Variant            | Example                                        |
| :----------------- | :--------------------------------------------- |
| none               | `styler({ appearance: 'none' })`               |
| auto               | `styler({ appearance: 'auto' })`               |
| button             | `styler({ appearance: 'button' })`             |
| menulist-button    | `styler({ appearance: 'menulist-button' })`    |
| textfield          | `styler({ appearance: 'textfield' })`          |
| searchfield        | `styler({ appearance: 'searchfield' })`        |
| textarea           | `styler({ appearance: 'textarea' })`           |
| push-button        | `styler({ appearance: 'push-button' })`        |
| slider-horizontal  | `styler({ appearance: 'slider-horizontal' })`  |
| checkbox           | `styler({ appearance: 'checkbox' })`           |
| radio              | `styler({ appearance: 'radio' })`              |
| square-button      | `styler({ appearance: 'square-button' })`      |
| menulist           | `styler({ appearance: 'menulist' })`           |
| listbox            | `styler({ appearance: 'listbox' })`            |
| meter              | `styler({ appearance: 'meter' })`              |
| progress-bar       | `styler({ appearance: 'progress-bar' })`       |
| scrollbarbutton-up | `styler({ appearance: 'scrollbarbutton-up' })` |
| button-bevel       | `styler({ appearance: 'button-bevel' })`       |
| media-mute-button  | `styler({ appearance: 'media-mute-button' })`  |
| caret              | `styler({ appearance: 'caret' })`              |
| inherit            | `styler({ appearance: 'inherit' })`            |
| initial            | `styler({ appearance: 'initial' })`            |
| revert             | `styler({ appearance: 'revert' })`             |
| revert-layer       | `styler({ appearance: 'revert-layer' })`       |
| unset              | `styler({ appearance: 'unset' })`              |

## fill

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/fill)

| Variant   | Example                                                    |
| :-------- | :--------------------------------------------------------- |
| **color** | `styler({ fill: 'red' })` or `styler({ fill: 'red-500' })` |
| inherit   | `styler({ fill: 'inherit' })`                              |
| current   | `styler({ fill: 'current' })`                              |

## stroke

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/stroke)

| Variant    | Example                                                        |
| :--------- | :------------------------------------------------------------- |
| **number** | `styler({ stroke: 5 })`                                        |
| **color**  | `styler({ stroke: 'red' })` or `styler({ stroke: 'red-500' })` |
| inherit    | `styler({ stroke: 'inherit' })`                                |
| current    | `styler({ stroke: 'current' })`                                |

## blur

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/blur)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **true**   | `styler({ blur: true })`   |
| **number** | `styler({ blur: 5 })`      |
| none       | `styler({ blur: 'none' })` |
| sm         | `styler({ blur: 'sm' })`   |
| md         | `styler({ blur: 'md' })`   |
| lg         | `styler({ blur: 'lg' })`   |
| xl         | `styler({ blur: 'xl' })`   |
| 2xl        | `styler({ blur: '2xl' })`  |
| 3xl        | `styler({ blur: '3xl' })`  |

## brightness

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/brightness)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **number** | `styler({ brightness: 5 })` |

## contrast

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/contrast)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **number** | `styler({ contrast: 5 })` |

## grayscale

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/grayscale)

| Variant    | Example                       |
| :--------- | :---------------------------- |
| **true**   | `styler({ grayscale: true })` |
| **number** | `styler({ grayscale: 5 })`    |

## invert

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/invert)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **true**   | `styler({ invert: true })` |
| **number** | `styler({ invert: 5 })`    |

## hue_rotate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/hue_rotate)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **number** | `styler({ hue_rotate: 5 })` |

## saturate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/saturate)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **number** | `styler({ saturate: 5 })` |

## sepia

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/sepia)

| Variant    | Example                   |
| :--------- | :------------------------ |
| **true**   | `styler({ sepia: true })` |
| **number** | `styler({ sepia: 5 })`    |

## drop_shadow

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/drop_shadow)

| Variant  | Example                           |
| :------- | :-------------------------------- |
| **true** | `styler({ drop_shadow: true })`   |
| sm       | `styler({ drop_shadow: 'sm' })`   |
| md       | `styler({ drop_shadow: 'md' })`   |
| lg       | `styler({ drop_shadow: 'lg' })`   |
| xl       | `styler({ drop_shadow: 'xl' })`   |
| 2xl      | `styler({ drop_shadow: '2xl' })`  |
| none     | `styler({ drop_shadow: 'none' })` |

## backdrop_blur

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-blur)

| Variant    | Example                             |
| :--------- | :---------------------------------- |
| **true**   | `styler({ backdrop_blur: true })`   |
| **number** | `styler({ backdrop_blur: 5 })`      |
| none       | `styler({ backdrop_blur: 'none' })` |
| sm         | `styler({ backdrop_blur: 'sm' })`   |
| md         | `styler({ backdrop_blur: 'md' })`   |
| lg         | `styler({ backdrop_blur: 'lg' })`   |
| xl         | `styler({ backdrop_blur: 'xl' })`   |
| 2xl        | `styler({ backdrop_blur: '2xl' })`  |
| 3xl        | `styler({ backdrop_blur: '3xl' })`  |

## backdrop_brightness

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-brightness)

| Variant    | Example                              |
| :--------- | :----------------------------------- |
| **number** | `styler({ backdrop_brightness: 5 })` |

## backdrop_contrast

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-contrast)

| Variant    | Example                            |
| :--------- | :--------------------------------- |
| **number** | `styler({ backdrop_contrast: 5 })` |

## backdrop_grayscale

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-grayscale)

| Variant    | Example                                |
| :--------- | :------------------------------------- |
| **true**   | `styler({ backdrop_grayscale: true })` |
| **number** | `styler({ backdrop_grayscale: 5 })`    |

## backdrop_invert

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-invert)

| Variant    | Example                             |
| :--------- | :---------------------------------- |
| **true**   | `styler({ backdrop_invert: true })` |
| **number** | `styler({ backdrop_invert: 5 })`    |

## backdrop_hue_rotate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-hue-rotate)

| Variant    | Example                              |
| :--------- | :----------------------------------- |
| **number** | `styler({ backdrop_hue_rotate: 5 })` |

## backdrop_saturate

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-saturate)

| Variant    | Example                            |
| :--------- | :--------------------------------- |
| **number** | `styler({ backdrop_saturate: 5 })` |

## backdrop_opacity

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-opacity)

| Variant    | Example                           |
| :--------- | :-------------------------------- |
| **number** | `styler({ backdrop_opacity: 5 })` |

## backdrop_sepia

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/backdrop-sepia)

| Variant    | Example                            |
| :--------- | :--------------------------------- |
| **true**   | `styler({ backdrop_sepia: true })` |
| **number** | `styler({ backdrop_sepia: 5 })`    |

## d

Styles: divide

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/divide-width)

| Variant    | Example                                              |
| :--------- | :--------------------------------------------------- |
| **number** | `styler({ d: 5 })`                                   |
| **color**  | `styler({ d: 'red' })` or `styler({ d: 'red-500' })` |
| reverse    | `styler({ d: 'reverse' })`                           |
| px         | `styler({ d: 'px' })`                                |
| solid      | `styler({ d: 'solid' })`                             |
| dotted     | `styler({ d: 'dotted' })`                            |
| dashed     | `styler({ d: 'dashed' })`                            |
| none       | `styler({ d: 'none' })`                              |
| double     | `styler({ d: 'double' })`                            |

## dx

Styles: divide_x

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/divide-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ dx: 5 })`                                    |
| **color**  | `styler({ dx: 'red' })` or `styler({ dx: 'red-500' })` |
| reverse    | `styler({ dx: 'reverse' })`                            |
| px         | `styler({ dx: 'px' })`                                 |
| solid      | `styler({ dx: 'solid' })`                              |
| dotted     | `styler({ dx: 'dotted' })`                             |
| dashed     | `styler({ dx: 'dashed' })`                             |
| none       | `styler({ dx: 'none' })`                               |
| double     | `styler({ dx: 'double' })`                             |

## dy

Styles: divide_y

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/divide-width)

| Variant    | Example                                                |
| :--------- | :----------------------------------------------------- |
| **number** | `styler({ dy: 5 })`                                    |
| **color**  | `styler({ dy: 'red' })` or `styler({ dy: 'red-500' })` |
| reverse    | `styler({ dy: 'reverse' })`                            |
| px         | `styler({ dy: 'px' })`                                 |
| solid      | `styler({ dy: 'solid' })`                              |
| dotted     | `styler({ dy: 'dotted' })`                             |
| dashed     | `styler({ dy: 'dashed' })`                             |
| none       | `styler({ dy: 'none' })`                               |
| double     | `styler({ dy: 'double' })`                             |

## s

Styles: space

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/space)

| Variant    | Example                    |
| :--------- | :------------------------- |
| **number** | `styler({ s: 5 })`         |
| reverse    | `styler({ s: 'reverse' })` |
| px         | `styler({ s: 'px' })`      |

## sx

Styles: space_x

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/space)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **number** | `styler({ sx: 5 })`         |
| reverse    | `styler({ sx: 'reverse' })` |
| px         | `styler({ sx: 'px' })`      |

## sy

Styles: space_y

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/space)

| Variant    | Example                     |
| :--------- | :-------------------------- |
| **number** | `styler({ sy: 5 })`         |
| reverse    | `styler({ sy: 'reverse' })` |
| px         | `styler({ sy: 'px' })`      |

## ml

Styles: marginLeft

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ ml: '1/2' })`  |
| **number** | `styler({ ml: 5 })`      |
| px         | `styler({ ml: 'px' })`   |
| auto       | `styler({ ml: 'auto' })` |

## mr

Styles: marginRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ mr: '1/2' })`  |
| **number** | `styler({ mr: 5 })`      |
| px         | `styler({ mr: 'px' })`   |
| auto       | `styler({ mr: 'auto' })` |

## mb

Styles: marginBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ mb: '1/2' })`  |
| **number** | `styler({ mb: 5 })`      |
| px         | `styler({ mb: 'px' })`   |
| auto       | `styler({ mb: 'auto' })` |

## mt

Styles: marginTop

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ mt: '1/2' })`  |
| **number** | `styler({ mt: 5 })`      |
| px         | `styler({ mt: 'px' })`   |
| auto       | `styler({ mt: 'auto' })` |

## mx

Styles: marginLeft, marginRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ mx: '1/2' })`  |
| **number** | `styler({ mx: 5 })`      |
| px         | `styler({ mx: 'px' })`   |
| auto       | `styler({ mx: 'auto' })` |

## my

Styles: marginTop, marginBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/margin)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ my: '1/2' })`  |
| **number** | `styler({ my: 5 })`      |
| px         | `styler({ my: 'px' })`   |
| auto       | `styler({ my: 'auto' })` |

## p

Styles: padding

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                |
| :--------- | :--------------------- |
| **A/B**    | `styler({ p: '1/2' })` |
| **number** | `styler({ p: 5 })`     |
| px         | `styler({ p: 'px' })`  |

## pl

Styles: paddingLeft

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ pl: '1/2' })` |
| **number** | `styler({ pl: 5 })`     |
| px         | `styler({ pl: 'px' })`  |

## pt

Styles: paddingTop

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ pt: '1/2' })` |
| **number** | `styler({ pt: 5 })`     |
| px         | `styler({ pt: 'px' })`  |

## pr

Styles: paddingRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ pr: '1/2' })` |
| **number** | `styler({ pr: 5 })`     |
| px         | `styler({ pr: 'px' })`  |

## pb

Styles: paddingBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ pb: '1/2' })` |
| **number** | `styler({ pb: 5 })`     |
| px         | `styler({ pb: 'px' })`  |

## px

Styles: paddingLeft, paddingRight

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ px: '1/2' })` |
| **number** | `styler({ px: 5 })`     |
| px         | `styler({ px: 'px' })`  |

## py

Styles: paddingTop, paddingBottom

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/pading)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ py: '1/2' })` |
| **number** | `styler({ py: 5 })`     |
| px         | `styler({ py: 'px' })`  |

## delay

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/transition-delay)

| Variant    | Example                |
| :--------- | :--------------------- |
| **number** | `styler({ delay: 5 })` |

## transition

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/transition-property)

| Variant    | Example                               |
| :--------- | :------------------------------------ |
| **true**   | `styler({ transition: true })`        |
| **number** | `styler({ transition: 5 })`           |
| none       | `styler({ transition: 'none' })`      |
| linear     | `styler({ transition: 'linear' })`    |
| in         | `styler({ transition: 'in' })`        |
| out        | `styler({ transition: 'out' })`       |
| in-out     | `styler({ transition: 'in-out' })`    |
| all        | `styler({ transition: 'all' })`       |
| opacity    | `styler({ transition: 'opacity' })`   |
| shadow     | `styler({ transition: 'shadow' })`    |
| transform  | `styler({ transition: 'transform' })` |
| colors     | `styler({ transition: 'colors' })`    |

## r

Styles: borderRadius

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-radius)

| Variant    | Example                 |
| :--------- | :---------------------- |
| **A/B**    | `styler({ r: '1/2' })`  |
| **number** | `styler({ r: 5 })`      |
| none       | `styler({ r: 'none' })` |
| sm         | `styler({ r: 'sm' })`   |
| md         | `styler({ r: 'md' })`   |
| lg         | `styler({ r: 'lg' })`   |
| xl         | `styler({ r: 'xl' })`   |
| 2xl        | `styler({ r: '2xl' })`  |
| 3xl        | `styler({ r: '3xl' })`  |
| full       | `styler({ r: 'full' })` |

## r_tl

Styles: borderTopLeftRadius

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ r_tl: '1/2' })`  |
| **number** | `styler({ r_tl: 5 })`      |
| none       | `styler({ r_tl: 'none' })` |
| sm         | `styler({ r_tl: 'sm' })`   |
| md         | `styler({ r_tl: 'md' })`   |
| lg         | `styler({ r_tl: 'lg' })`   |
| xl         | `styler({ r_tl: 'xl' })`   |
| 2xl        | `styler({ r_tl: '2xl' })`  |
| 3xl        | `styler({ r_tl: '3xl' })`  |
| full       | `styler({ r_tl: 'full' })` |

## r_bl

Styles: borderBottomLeftRadius

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ r_bl: '1/2' })`  |
| **number** | `styler({ r_bl: 5 })`      |
| none       | `styler({ r_bl: 'none' })` |
| sm         | `styler({ r_bl: 'sm' })`   |
| md         | `styler({ r_bl: 'md' })`   |
| lg         | `styler({ r_bl: 'lg' })`   |
| xl         | `styler({ r_bl: 'xl' })`   |
| 2xl        | `styler({ r_bl: '2xl' })`  |
| 3xl        | `styler({ r_bl: '3xl' })`  |
| full       | `styler({ r_bl: 'full' })` |

## r_tr

Styles: borderTopRightRadius

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ r_tr: '1/2' })`  |
| **number** | `styler({ r_tr: 5 })`      |
| none       | `styler({ r_tr: 'none' })` |
| sm         | `styler({ r_tr: 'sm' })`   |
| md         | `styler({ r_tr: 'md' })`   |
| lg         | `styler({ r_tr: 'lg' })`   |
| xl         | `styler({ r_tr: 'xl' })`   |
| 2xl        | `styler({ r_tr: '2xl' })`  |
| 3xl        | `styler({ r_tr: '3xl' })`  |
| full       | `styler({ r_tr: 'full' })` |

## r_br

Styles: borderBottomRightRadius

| Variant    | Example                    |
| :--------- | :------------------------- |
| **A/B**    | `styler({ r_br: '1/2' })`  |
| **number** | `styler({ r_br: 5 })`      |
| none       | `styler({ r_br: 'none' })` |
| sm         | `styler({ r_br: 'sm' })`   |
| md         | `styler({ r_br: 'md' })`   |
| lg         | `styler({ r_br: 'lg' })`   |
| xl         | `styler({ r_br: 'xl' })`   |
| 2xl        | `styler({ r_br: '2xl' })`  |
| 3xl        | `styler({ r_br: '3xl' })`  |
| full       | `styler({ r_br: 'full' })` |

## rt

Styles: borderTopLeftRadius, borderTopRightRadius

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-radius)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ rt: '1/2' })`  |
| **number** | `styler({ rt: 5 })`      |
| none       | `styler({ rt: 'none' })` |
| sm         | `styler({ rt: 'sm' })`   |
| md         | `styler({ rt: 'md' })`   |
| lg         | `styler({ rt: 'lg' })`   |
| xl         | `styler({ rt: 'xl' })`   |
| 2xl        | `styler({ rt: '2xl' })`  |
| 3xl        | `styler({ rt: '3xl' })`  |
| full       | `styler({ rt: 'full' })` |

## rl

Styles: borderTopLeftRadius, borderBottomLeftRadius

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-radius)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ rl: '1/2' })`  |
| **number** | `styler({ rl: 5 })`      |
| none       | `styler({ rl: 'none' })` |
| sm         | `styler({ rl: 'sm' })`   |
| md         | `styler({ rl: 'md' })`   |
| lg         | `styler({ rl: 'lg' })`   |
| xl         | `styler({ rl: 'xl' })`   |
| 2xl        | `styler({ rl: '2xl' })`  |
| 3xl        | `styler({ rl: '3xl' })`  |
| full       | `styler({ rl: 'full' })` |

## rb

Styles: borderBottomLeftRadius, borderBottomRightRadius

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-radius)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ rb: '1/2' })`  |
| **number** | `styler({ rb: 5 })`      |
| none       | `styler({ rb: 'none' })` |
| sm         | `styler({ rb: 'sm' })`   |
| md         | `styler({ rb: 'md' })`   |
| lg         | `styler({ rb: 'lg' })`   |
| xl         | `styler({ rb: 'xl' })`   |
| 2xl        | `styler({ rb: '2xl' })`  |
| 3xl        | `styler({ rb: '3xl' })`  |
| full       | `styler({ rb: 'full' })` |

## rr

Styles: borderTopRightRadius, borderBottomRightRadius

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/border-radius)

| Variant    | Example                  |
| :--------- | :----------------------- |
| **A/B**    | `styler({ rr: '1/2' })`  |
| **number** | `styler({ rr: 5 })`      |
| none       | `styler({ rr: 'none' })` |
| sm         | `styler({ rr: 'sm' })`   |
| md         | `styler({ rr: 'md' })`   |
| lg         | `styler({ rr: 'lg' })`   |
| xl         | `styler({ rr: 'xl' })`   |
| 2xl        | `styler({ rr: '2xl' })`  |
| 3xl        | `styler({ rr: '3xl' })`  |
| full       | `styler({ rr: 'full' })` |

## shadow

[Click here to see Tailwind implementation](https://tailwindcss.com/docs/box-shadow)

| Variant   | Example                                                        |
| :-------- | :------------------------------------------------------------- |
| **color** | `styler({ shadow: 'red' })` or `styler({ shadow: 'red-500' })` |
| sm        | `styler({ shadow: 'sm' })`                                     |
| md        | `styler({ shadow: 'md' })`                                     |
| lg        | `styler({ shadow: 'lg' })`                                     |
| xl        | `styler({ shadow: 'xl' })`                                     |
| 2xl       | `styler({ shadow: '2xl' })`                                    |
| inner     | `styler({ shadow: 'inner' })`                                  |
| none      | `styler({ shadow: 'none' })`                                   |
| inherit   | `styler({ shadow: 'inherit' })`                                |
| current   | `styler({ shadow: 'current' })`                                |
