import {renderTabs} from './desktop/tabs.js';
import {renderPlusMinusButton} from './desktop/plus-minus-button.js';
import {renderForm} from './desktop/form.js';
import {renderProduct} from './desktop/product.js';
import {renderNotifications} from './desktop/notifications.js';
import {renderCkeditor} from "./desktop/ckeditor.js";
import {renderDelete} from "./desktop/delete";
import {renderEdit} from "./desktop/edit";
import {renderClean} from './desktop/clean.js';

renderClean();
renderDelete();
renderEdit();
renderCkeditor();
renderNotifications();
renderProduct();
renderTabs();
renderPlusMinusButton();
renderForm();