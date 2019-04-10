module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/index.coffee");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BookmarksView.coffee":
/*!*****************************************!*\
  !*** ./components/BookmarksView.coffee ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, BookmarksView, Input, MAX_CHAR, Menu, MenuTab, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({StyleContext, Input, MenuTab, Menu, Bar} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MAX_CHAR = 32;

BookmarksView = class BookmarksView extends Component {
  constructor(props) {
    super(props);
    this.getFormInitialState = this.getFormInitialState.bind(this);
    this.saveQueryItem = this.saveQueryItem.bind(this);
    // if n_q._id != @props.query_item._id
    this.showNewBookmarkForm = this.showNewBookmarkForm.bind(this);
    this.hideNewBookmarkForm = this.hideNewBookmarkForm.bind(this);
    this.setQueryItemLayoutKeysEnabled = this.setQueryItemLayoutKeysEnabled.bind(this);
    this.setQueryItemValue = this.setQueryItemValue.bind(this);
    this.setQueryItemLayoutKeys = this.setQueryItemLayoutKeys.bind(this);
    this.setQueryItemSortKeys = this.setQueryItemSortKeys.bind(this);
    this.setQueryItemLabel = this.setQueryItemLabel.bind(this);
    this.state = {
      show_new_bookmark_form: false
    };
    Object.assign(this.state, this.getFormInitialState(props));
  }

  getFormInitialState(props) {
    boundMethodCheck(this, BookmarksView);
    return {
      query_item_value: props.query_item.value,
      query_item_layout_keys: JSON.stringify(props.query_item.layout_keys),
      query_item_sort_keys: JSON.stringify(props.query_item.sort_keys),
      query_item_label: props.query_item.label
    };
  }

  saveQueryItem() {
    var n_q;
    boundMethodCheck(this, BookmarksView);
    n_q = this.props.createOrUpdateQueryItem({
      value: this.state.query_item_value,
      layout_keys: JSON.parse(this.state.query_item_layout_keys),
      sort_keys: JSON.parse(this.state.query_item_sort_keys),
      query_item_label: this.state.query_item_label
    }, this.props.query_item);
    return this.props.saveQueryItem(n_q);
  }

  showNewBookmarkForm() {
    var set_state;
    boundMethodCheck(this, BookmarksView);
    set_state = Object.assign(this.getFormInitialState(this.props), {
      show_new_bookmark_form: true
    });
    return this.setState(set_state);
  }

  hideNewBookmarkForm() {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      show_new_bookmark_form: false
    });
  }

  setQueryItemLayoutKeysEnabled() {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      query_item_layout_keys_enabled: !this.state.query_item_layout_keys_enabled
    });
  }

  setQueryItemValue(e) {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      query_item_value: e.target.value
    });
  }

  setQueryItemLayoutKeys(e) {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      query_item_layout_keys: e.target.value
    });
  }

  setQueryItemSortKeys(e) {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      query_item_sort_keys: e.target.value
    });
  }

  setQueryItemLabel(e) {
    boundMethodCheck(this, BookmarksView);
    return this.setState({
      query_item_label: e.target.value
    });
  }

  renderForm() {
    var add_disabled, add_fn, add_label, add_type, form_options, selected_layout_keys_val;
    selected_layout_keys_val = this.props.selected_layout && JSON.stringify(this.props.selected_layout.keys) || null;
    if (this.state.show_new_bookmark_form) {
      form_options = [
        h(MenuTab,
        {
          content: h(Input,
        {
            type: 'input',
            onInput: this.setQueryItemLabel,
            value: this.state.query_item_label,
            placeholder: 'max ' + MAX_CHAR + ' char',
            label: 'label'
          })
        })
      ];
    }
    
    // h MenuTab,
    // 	content: h Input,
    // 		type: 'input'
    // 		bar: yes
    // 		btn_type: 'flat'

    // 		label: 'query'.padStart(8)
    // 		value: @state.query_item_value
    // 		placeholder: @props.query_item.value

    // 		onInput: @setQueryItemValue

    // h MenuTab,
    // 	content: h Bar,
    // 		big: no
    // 		h Input,
    // 			label: 'save layout'.padStart(8)
    // 			type: 'checkbox'
    // 			select: @state.query_item_layout_keys_enabled
    // 			checked: @state.query_item_layout_keys_enabled
    // 			onClick: @setQueryItemLayoutKeysEnabled
    // 			btn_type: 'flat'
    // 		h Input,
    // 			type: 'input'
    // 			btn_type: 'flat'
    // 			disabled: !@state.query_item_layout_keys_enabled
    // 			placeholder: JSON.stringify(@props.query_item.layout_keys)
    // 			value: @state.query_item_layout_keys
    // 			onInput: @setQueryItemLayoutKeys

    // h MenuTab,
    // 	content: h Input,
    // 		type: 'input'
    // 		btn_type: 'flat'
    // 		btn_type: 'flat'

    // 		label: 'sort'.padStart(8)
    // 		placeholder: JSON.stringify(@props.query_item.sort_keys)
    // 		value: @state.query_item_sort_keys

    // 		onInput: @setQueryItemSortKeys
    if (this.state.show_new_bookmark_form) {
      add_label = 'save';
      add_fn = this.saveQueryItem;
      add_type = 'primary';
      add_disabled = !this.state.query_item_label;
    } else {
      add_label = 'add';
      add_fn = this.showNewBookmarkForm;
      add_type = 'default';
      add_disabled = false;
    }
    return h(MenuTab, {
      onClickBackdrop: this.hideNewBookmarkForm,
      reveal: this.state.show_new_bookmark_form,
      show_backdrop: this.state.show_new_bookmark_form,
      content: h(Bar, {
        style: {
          width: '100%'
        },
        big: false
      }, h(Input, {
        type: 'button',
        i: 'delete',
        onClick: this.props.deleteQueryItem,
        disabled: this.state.show_new_bookmark_form,
        center: true,
        btn_type: 'primary',
        label: 'del'
      }), h(Input, {
        type: 'button',
        i: 'add',
        // btn_type: 'true'
        disabled: add_disabled,
        btn_type: add_type,
        onClick: add_fn,
        center: true,
        label: 'add'
      })),
      vert: true
    }, form_options);
  }

  render() {
    var content_tab, form_tab, props, state, tab_options;
    props = this.props;
    state = this.state;
    tab_options = {
      vert: true,
      big: false,
      force_split_x: 1,
      onClick: props.onClick,
      onClickBackdrop: props.onHide,
      reveal: props.reveal,
      show_backdrop: props.reveal,
      content: h(Input, {
        type: 'button',
        btn_type: 'flat',
        i: 'bookmark'
      })
    };
    content_tab = h(MenuTab, {
      content: h('div', {
        className: css['bookmarks-list-container'],
        style: {
          background: this.context.primary.inv[1]
        }
      }, props.bookmarks.map(this.mapBookmarkButtons))
    });
    if (props.reveal) {
      form_tab = this.renderForm();
    }
    return h(MenuTab, tab_options, content_tab, form_tab);
  }

};

BookmarksView.contextType = StyleContext;

module.exports = BookmarksView;


/***/ }),

/***/ "./components/CreateDocView.coffee":
/*!*****************************************!*\
  !*** ./components/CreateDocView.coffee ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, CreateDocView, Input, Menu, MenuTab, Slide, StyleContext, css;

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

CreateDocView = class CreateDocView extends Component {
  onNewDocFormInput(key_name, e) {
    // log key_name,e.target.value
    this.props.new_doc[key_name] = e.target.value;
    return this.forceUpdate();
  }

  renderNewDocForm(props, state) {
    var filter_q, lc;
    lc = props.keys_array.reduce(function(pre, key_name) {
      if (key_name.length > pre) {
        return key_name.length;
      }
      return pre;
    }, 0);
    if (props.filter) {
      filter_q = props.filter.query_value;
    }
    return h('form', {
      className: css['model-grid-add-doc-form'],
      style: {
        background: this.context.primary.inv[0]
      }
    }, h(Bar, {
      vert: true,
      big: false
    }, props.form.keys.map((key, i) => {
      var key_name, key_val, override;
      key_name = key.name;
      if (key.render) {
        return key.render(props.new_doc, () => {
          return this.forceUpdate();
        });
      }
      // @onNewDocFormInput.bind(null,key_name,value)
      override = null;
      if (filter_q && filter_q[key_name]) {
        override = filter_q[key_name];
      }
      key = props.keys[key_name];
      props.new_doc[key_name] = override || props.new_doc[key_name];
      key_val = props.new_doc[key_name];
      return h(Input, {
        key: key_name,
        label: key.label.padStart(lc + 4, " "),
        bar: true,
        name: props.schema.name + '/' + key_name,
        disabled: override && true,
        required: key.form_required && true,
        is_valid: (typeof key.form_validate === "function" ? key.form_validate(key_val) : void 0) || void 0,
        value: override || key_val || '',
        onInput: this.onNewDocFormInput.bind(this, key_name),
        placeholder: key.form_placeholder || key_name
      });
    }), h(Input, {
      big: true,
      type: 'button',
      label: 'create',
      center: true,
      onClick: props.createDataItem,
      btn_type: 'primary'
    })));
  }

  render() {
    return h(MenuTab, {
      vert: true,
      show_backdrop: this.props.reveal,
      reveal: this.props.reveal,
      onClick: this.props.onClick,
      content: h(Input, {
        type: 'button',
        btn_type: 'flat',
        i: 'add'
      })
    }, this.props.reveal && this.renderNewDocForm(this.props, this.state));
  }

};

CreateDocView.contextType = StyleContext;

module.exports = CreateDocView;


/***/ }),

/***/ "./components/GridView.coffee":
/*!************************************!*\
  !*** ./components/GridView.coffee ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, CELL_PAD, CHAR_W, GridView, Input, InputCell, MAX_CHAR, Menu, MenuTab, MethodsView, MultiGrid, Overlay, Slide, StyleContext, cn, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({MultiGrid} = __webpack_require__(/*! react-virtualized/dist/commonjs/MultiGrid */ "react-virtualized/dist/commonjs/MultiGrid"));

cn = __webpack_require__(/*! classnames */ "classnames");

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, Overlay, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MethodsView = __webpack_require__(/*! ./MethodsView.coffee */ "./components/MethodsView.coffee");

CHAR_W = 7.8;

CELL_PAD = 10;

MAX_CHAR = 32;

InputCell = class InputCell extends Component {
  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onHoverOn = this.onHoverOn.bind(this);
    this.onHoverOff = this.onHoverOff.bind(this);
    this.inputRef = this.inputRef.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.state = {
      value: props.value || '',
      focus: false
    };
  }

  onInput(e) {
    boundMethodCheck(this, InputCell);
    return this.setState({
      value: e.target.value
    });
  }

  onFocus() {
    boundMethodCheck(this, InputCell);
    return this.setState({
      focus: true
    });
  }

  onBlur() {
    boundMethodCheck(this, InputCell);
    if (this.props.value !== this.state.value) {
      this.props.onSave(this.state.value);
    }
    return this.setState({
      focus: false
    });
  }

  onHoverOn() {
    boundMethodCheck(this, InputCell);
    return this.setState({
      hover: true
    });
  }

  onHoverOff() {
    boundMethodCheck(this, InputCell);
    return this.setState({
      hover: false
    });
  }

  inputRef(el) {
    boundMethodCheck(this, InputCell);
    return this._ref = el;
  }

  onEnter(e) {
    boundMethodCheck(this, InputCell);
    if (e.keyCode === 13) {
      return this._ref.blur();
    }
  }

  componentWillUpdate(props) {
    if (this.props.value !== props.value) {
      return this.state.value = props.value;
    }
  }

  render() {
    return h('input', {
      value: this.state.value,
      type: typeof this.state.value,
      placeholder: this.props.value,
      onFocus: this.onFocus,
      ref: this.inputRef,
      onMouseEnter: this.onHoverOn,
      onMouseLeave: this.onHoverOff,
      onKeyDown: this.onEnter,
      onChange: this.onInput,
      onBlur: this.onBlur,
      style: {
        border: this.state.focus && '1px dashed' || 'none',
        paddingLeft: this.state.focus && '9px' || '10px',
        color: (this.state.focus || this.state.hover) && this.context.secondary.inv[0] || this.context.secondary.inv[1],
        borderColor: this.context.secondary.inv[0],
        background: (this.state.focus || this.state.hover) && this.context.secondary.color[0] || this.context.secondary.color[1]
      },
      btn_type: 'primary'
    });
  }

};

InputCell.contextType = StyleContext;

GridView = class GridView extends Component {
  constructor(props) {
    super(props);
    this.gridRef = this.gridRef.bind(this);
    this.baseRef = this.baseRef.bind(this);
    this.toggleSortKey = this.toggleSortKey.bind(this);
    this.onSelectDocumentById = this.onSelectDocumentById.bind(this);
    this.showMethodMenu = this.showMethodMenu.bind(this);
    this.hideMethodMenu = this.hideMethodMenu.bind(this);
    this.columnWidth = this.columnWidth.bind(this);
    this.onScroll = this.onScroll.bind(this);
    // @setState
    // 	run: yes
    // {index, isScrolling, key, parent, style}
    this.renderCell = this.renderCell.bind(this);
    this.onShowMenu = this.onShowMenu.bind(this);
    this.rowHeight = this.rowHeight.bind(this);
    this.state = {
      force_update_grid: props.force_update_grid,
      grid_w: 0,
      grid_h: 0
    };
  }

  // log @state
  saveCellInput(key_name, value) {
    var update;
    update = {};
    update[key_name] = value;
    // log 'saveCellInput -> updateDataItem',update
    return this.props.updateDataItem(update);
  }

  gridRef(el) {
    boundMethodCheck(this, GridView);
    return this._grid = el;
  }

  baseRef(el) {
    boundMethodCheck(this, GridView);
    return this.base = el != null ? el._outer : void 0;
  }

  toggleSortKey(key) {
    var keys;
    boundMethodCheck(this, GridView);
    keys = Object.assign({}, this.props.query_item.sort_keys);
    if (!keys[key]) {
      keys[key] = -1;
    } else if (keys[key] === -1) {
      keys[key] = 1;
    } else {
      keys[key] = void 0;
    }
    // log keys
    if (this.props.query_item.called_at) {
      this.props.cloneQueryItemAndSet({
        sort_keys: keys
      }, this.props.query_item, true);
    } else {
      this.props.updateQueryItem({
        sort_keys: keys
      }, this.props.query_item);
    }
    return this.setState({
      force_update_grid: true
    });
  }

  onSelectDocumentById(doc_id) {
    boundMethodCheck(this, GridView);
    return this.props.onSelectDocumentById(doc_id);
  }

  showMethodMenu(g_opts) {
    boundMethodCheck(this, GridView);
    this.setState({
      show_method_menu: true,
      data_item_g_opts: g_opts
    });
    return this.props.selectDataItem(this.props.data[g_opts.rowIndex - 1]);
  }

  hideMethodMenu() {
    boundMethodCheck(this, GridView);
    return this.setState({
      show_method_menu: false,
      data_item_g_opts: null
    });
  }

  columnWidth(g_opts) {
    var key, key_name;
    boundMethodCheck(this, GridView);
    if (g_opts.index === 0) {
      return 30;
    }
    key_name = this.props.query_item.layout_keys[g_opts.index - 1];
    if (!key_name) {
      console.warn(g_opts.index - 1, this.props.query_item.layout_keys);
      return null;
    }
    key = this.props.schema.keys[key_name];
    if (!key) {
      throw new Error('schema key not found ,' + key_name);
    }
    return key.col_width;
  }

  onScroll(e) {
    boundMethodCheck(this, GridView);
    if (!this.props.query_item.end_reached && this.props.query_item.completed_at && e.scrollTop > 0 && e.scrollTop > (e.scrollHeight - (e.clientHeight * this.props.scroll_query_beta_offset))) {
      return this.props.runQuery(true);
    }
  }

  renderCell(g_opts) {
    var alt_cell, arrow_color, data, doc, edit_key, g_style, is_key, is_selected, key, key_name, max_l, rotate_arrow, schema, v_w, value;
    boundMethodCheck(this, GridView);
    schema = this.props.schema;
    data = this.props.data;
    doc = data[g_opts.rowIndex - 1];
    is_key = g_opts.rowIndex === 0;
    g_style = {};
    if (!is_key && this.props.data_item) {
      is_selected = this.props.data_item._id === data[g_opts.rowIndex - 1]._id;
    }
    if (g_opts.rowIndex % 2 === 0) {
      alt_cell = true;
    }
    if (g_opts.rowIndex !== 0 && is_selected) {
      g_style.color = this.context.secondary.inv[0];
    }
    if (schema.rowColor && doc) {
      g_style.background = schema.rowColor(schema, doc, g_opts.rowIndex);
    }
    if (!g_style.background && alt_cell) {
      g_style.background = this.context.primary.inv[1];
    }
    if (g_opts.rowIndex !== 0 && is_selected) {
      g_style.background = this.context.secondary.color[1];
    }
    if (g_opts.columnIndex === 0) {
      if (is_key) {
        return null;
      }
      
      // g_opts.style.width = '100%'
      return h('div', {
        style: Object.assign(g_style, g_opts.style),
        key: g_opts.key,
        onClick: !is_selected && this.props.selectDataItem.bind(null, data[g_opts.rowIndex - 1]) || void 0
      }, h('div', {
        className: cn(css['model-grid-cell'], css['model-grid-cell-method-button'], 'material-icons'),
        onClick: this.showMethodMenu.bind(this, g_opts)
      }, 'more_horiz'));
    } else {
      key_name = this.props.query_item.layout_keys[g_opts.columnIndex - 1];
      key = schema.keys[key_name];
      edit_key = !is_key && this.state.edit_key === key_name && is_selected;
      if (!key) {
        throw new Error('invalid key ' + key_name);
      }
    }
    if (!is_key) {
      value = data[g_opts.rowIndex - 1][key_name];
    }
    
    // log 'render cell'
    if (is_selected && key.can_edit) {
      value = h(InputCell, {
        value: value,
        onSave: this.saveCellInput.bind(this, key_name)
      });
    } else if (!is_key && typeof value === 'string') {
      v_w = value.length * CHAR_W + CELL_PAD * 2;
      max_l = Math.floor((key.col_width - CELL_PAD * 2) / CHAR_W);
      if (v_w > key.col_width) {
        value = value.substring(0, max_l - 2) + '..';
      }
    }
    // log is_key
    if (is_key) {
      if (!this.props.query_item.sort_keys[key_name]) {
        arrow_color = this.context.primary.color[2];
        rotate_arrow = 'keyboard_arrow_left';
      } else if (this.props.query_item.sort_keys[key_name] === 1) {
        rotate_arrow = 'keyboard_arrow_up';
        arrow_color = this.context.secondary.false;
      } else if (this.props.query_item.sort_keys[key_name] === -1) {
        rotate_arrow = 'keyboard_arrow_down';
        arrow_color = this.context.secondary.true;
      }
      g_style.color = arrow_color;
      return h('div', {
        className: css['model-grid-cell'] + ' ' + css['model-grid-key'],
        style: Object.assign(g_style, g_opts.style),
        key: g_opts.key,
        onClick: key.indexed && this.toggleSortKey.bind(null, key_name) || void 0
      }, h('div', {
        className: css['model-grid-label']
      }, key.label), key.indexed && h('i', {
        className: 'material-icons ' + css['model-grid-key-toggle']
      }, rotate_arrow));
    }
    return h('div', {
      style: Object.assign(g_style, g_opts.style),
      key: g_opts.key
    }, h('div', {
      onMouseDown: !is_selected && this.props.selectDataItem.bind(null, data[g_opts.rowIndex - 1]) || void 0,
      className: css['model-grid-cell']
    }, key.render && key.render(schema, data[g_opts.rowIndex - 1]) || value));
  }

  // return h 'div',
  // 	className: css['model-grid-cell']
  // 	onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1])
  // 	style: g_opts.style
  // 	key: g_opts.key
  // 	value
  columnCount() {
    return 5;
  }

  getGridKey(props) {
    var model_name;
    model_name = props.schema.name;
    return model_name + '-' + props.query_item._id + '-' + props.query_item.completed_at + '-' + props.query_item.layout_keys;
  }

  componentWillUpdate(props, state) {
    var g_k;
    if (!props.data_item) {
      this.state.show_method_menu = false;
    }
    if (props.data_item && props.data_item !== this.state.data_item) {
      state.force_update_grid = true;
      state.data_item = props.data_item;
      state.edit_key = null;
    }
    g_k = this.getGridKey(props);
    // log g_k
    if (g_k !== state.grid_key) {
      state.grid_key = g_k;
      state.force_update_grid = true;
    }
    // log @base
    if (this.base) {
      if (state.grid_w !== this.base.clientWidth || state.grid_h !== this.base.clientHeight) {
        log('resize grid');
        state.grid_w = this.base.clientWidth;
        return state.grid_h = this.base.clientHeight;
      }
    }
  }

  componentDidUpdate() {
    var ref;
    // log "UPDATED",@base.clientWidth
    if (this.base) {
      if (this.state.grid_w !== this.base.clientWidth || this.state.grid_h !== this.base.clientHeight) {
        // log 'update grid size',@props.schema.name,@base.clientHeight,@base.clientWidth
        return this.setState({
          force_update_grid: false,
          grid_w: this.base.clientWidth,
          grid_h: this.base.clientHeight
        });
      }
    }
    if (this.state.force_update_grid && this._grid) {
      if ((ref = this._grid) != null) {
        ref.recomputeGridSize();
      }
      return this.setState({
        force_update_grid: false
      });
    }
  }

  componentDidMount() {
    this.state.grid_key = this.getGridKey(this.props);
    return this.forceUpdate();
  }

  onShowMenu() {
    boundMethodCheck(this, GridView);
    return this.setState({
      scroll_to_data_item: true
    });
  }

  rowHeight(r_opts) {
    boundMethodCheck(this, GridView);
    if (r_opts.index === 0) {
      return 30;
    } else {
      return this.props.row_height;
    }
  }

  render() {
    var data, grid, item_label, method_menu, overlay, query_item, schema;
    schema = this.props.schema;
    data = this.props.data;
    query_item = this.props.query_item;
    // method_menu = null
    if (this.state.show_method_menu) {
      item_label = h(Input, {
        type: 'label',
        big: false,
        btn_type: 'flat',
        className: css['grid-item-label'],
        label: [
          this.props.schema.name,
          h('span',
          {
            key: 1,
            className: css['model-grid-slash']
          },
          '/'),
          h('span',
          {
            key: 2,
            style: {
              fontWeight: 600,
              color: this.context.primary.color[0]
            }
          },
          this.props.data_item._label || this.props.data_item._id)
        ]
      });
      method_menu = h(MethodsView, {
        data_item: this.props.data_item,
        render_edit_bar: true,
        showJSONView: this.props.showJSONView,
        methods: this.props.schema.methods,
        onDelete: this.props.deleteDataItem,
        renderDataItemMethod: this.props.renderDataItemMethod,
        runDataItemMethod: this.props.runDataItemMethod
      });
    }
    grid = h(MultiGrid, {
      key: this.props.query_item._id,
      styleTopRightGrid: {
        background: this.context.primary.inv[1]
      },
      className: css['model-grid-list'],
      ref: this.gridRef,
      onScroll: this.onScroll,
      cellRenderer: this.renderCell,
      columnWidth: this.columnWidth,
      columnCount: query_item.layout_keys.length + 1 || 0,
      fixedColumnCount: 0,
      fixedRowCount: 1,
      height: this.state.grid_h,
      width: this.state.grid_w,
      rowHeight: this.rowHeight,
      rowCount: data.length + 1
    });
    overlay = h(Overlay, {
      visible: this.state.show_method_menu,
      backdrop_color: this.context.primary.inv[1],
      onClick: this.hideMethodMenu
    }, h('div', {
      className: css['vert-left-bar'],
      style: {
        background: this.context.primary.color[1]
      }
    }), item_label);
    return h(Slide, {
      slide: true,
      vert: false,
      pos: this.state.show_method_menu ? 0 : 1
    }, h(Slide, {
      vert: true,
      style: {
        overflow: 'visible'
      },
      dim: DIM2 * 8
    }, method_menu || null), h(Slide, {
      beta: 100,
      className: css['model-grid-wrap'],
      ref: this.baseRef
    }, grid || null, overlay));
  }

};

GridView.contextType = StyleContext;

GridView.defaultProps = {
  row_height: 30,
  scroll_query_beta_offset: 2
};

module.exports = GridView;


/***/ }),

/***/ "./components/JsonView.coffee":
/*!************************************!*\
  !*** ./components/JsonView.coffee ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var JsonView, cn, css;

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

JsonView = class JsonView extends Component {
  render() {
    var children, i, j, key_map, len, ref, sep, str, t, val, val_map;
    key_map = {};
    val_map = {};
    sep = "🧝";
    str = JSON.stringify(this.props.json, function(key, value) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        val_map[value] = true;
        return sep + value + sep;
      }
      return value;
    }, 4);
    str = str.replace(/"[^"]*":/g, function(val) {
      val = val.substring(1, val.length - 2);
      key_map[val] = true;
      return '' + sep + val + sep + ':';
    });
    children = str.split(sep);
// children = children.map (val,i)->
    for (i = j = 0, len = children.length; j < len; i = ++j) {
      val = children[i];
      if (i % 2 === 0) {
        continue;
      }
      t = null;
      if (key_map[val]) {
        t = 'key';
      }
      if (!isNaN(Number(val))) {
        children[i - 1] = children[i - 1].slice(0, -1);
        t = 'number';
        children[i + 1] = children[i + 1].slice(1);
      } else if (val === 'true' || val === 'false' || val === 'null' || val === 'undefined') {
        children[i - 1] = children[i - 1].slice(0, -1);
        t = 'boolean';
        children[i + 1] = children[i + 1].slice(1);
      } else if (val_map[val]) {
        t = 'string';
        val = '"' + val + '"';
        children[i - 1] = children[i - 1].slice(0, -1);
        children[i + 1] = children[i + 1].slice(1);
      }
      if (t) {
        children[i] = h('span', {
          key: i,
          style: {
            color: (ref = this.props.colors) != null ? ref[t] : void 0
          }
        }, val);
      }
    }
    return h('div', {
      className: css['json-view'],
      style: this.props.style
    }, children);
  }

};

module.exports = JsonView;


/***/ }),

/***/ "./components/LayoutsView.coffee":
/*!***************************************!*\
  !*** ./components/LayoutsView.coffee ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, DragDropContext, Draggable, Droppable, Input, LayoutsView, MAX_CHAR, Menu, MenuTab, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MAX_CHAR = 32;

({DragDropContext, Droppable, Draggable} = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"));

LayoutsView = class LayoutsView extends Component {
  constructor(props) {
    super(props);
    // onSelectKey: (key_name)=>
    // 	key_arr = [].concat @props.query_item.layout_keys

    // 	k_i = key_arr.indexOf key_name
    // 	if k_i >= 0 
    // 		key_arr.splice(k_i,1)
    // 	else
    // 		key_arr.push key_name

    // 	if @props.query_item.called_at
    // 		@props.cloneQueryItemAndSet
    // 			layout_keys: key_arr
    // 		,@props.query_item

    // 	else
    // 		@props.updateQueryItemAndSet
    // 			layout_keys: key_arr
    // 		,@props.query_item
    this.addKey = this.addKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.setKeyIndex = this.setKeyIndex.bind(this);
    this.setNewLayoutNameValue = this.setNewLayoutNameValue.bind(this);
    this.setNewLayoutKeysValue = this.setNewLayoutKeysValue.bind(this);
    this.showNewLayoutForm = this.showNewLayoutForm.bind(this);
    this.hideNewLayoutForm = this.hideNewLayoutForm.bind(this);
    this.submitNewLayoutForm = this.submitNewLayoutForm.bind(this);
    this.mapMenuLayoutButtons = this.mapMenuLayoutButtons.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
    // onScroll: (e)=>
    // 	@_scroll_top = e.target.scrollTop
    // log @_scroll_top
    this.containerRef = this.containerRef.bind(this);
    this.state = {
      unused_keys: []
    };
    this._scroll_top = 0;
  }

  addKey(key_name) {
    boundMethodCheck(this, LayoutsView);
    return this.setKeyIndex(key_name, 0);
  }

  removeKey(key_name) {
    boundMethodCheck(this, LayoutsView);
    return this.setKeyIndex(key_name, -1);
  }

  setKeyIndex(key_name, index, splice) {
    var k_i, key_arr;
    boundMethodCheck(this, LayoutsView);
    key_arr = [].concat(this.props.query_item.layout_keys);
    k_i = key_arr.indexOf(key_name);
    if (index >= 0) {
      splice && key_arr.splice(k_i, 1);
      key_arr.splice(index, 0, key_name);
    } else {
      key_arr.splice(k_i, 1);
    }
    if (this.props.query_item.called_at) {
      return this.props.cloneQueryItemAndSet({
        layout_keys: key_arr
      }, this.props.query_item);
    } else {
      return this.props.updateQueryItemAndSet({
        layout_keys: key_arr
      }, this.props.query_item);
    }
  }

  updateUnusedKeys(props, state) {
    return state.unused_keys = state.unused_keys.filter(function(key) {
      return props.query_item.layout_keys.indexOf(key) < 0;
    });
  }

  resetUnusedKeys(props, state) {
    return state.unused_keys = props.keys_array.filter(function(key) {
      return props.query_item.layout_keys.indexOf(key) < 0;
    });
  }

  componentWillMount() {
    return this.resetUnusedKeys(this.props, this.state);
  }

  componentWillUpdate(props, state) {
    if (props.keys_array !== this.props.keys_array) {
      this.resetUnusedKeys(props, state);
    }
    if (props.query_item.layout_keys !== this.props.query_item.layout_keys) {
      return this.updateUnusedKeys(props, state);
    }
  }

  setNewLayoutNameValue(e) {
    boundMethodCheck(this, LayoutsView);
    return this.setState({
      new_layout_name_value: String(e.target.value).substring(0, MAX_CHAR)
    });
  }

  setNewLayoutKeysValue(e) {
    boundMethodCheck(this, LayoutsView);
    return this.setState({
      new_layout_keys_value: e.target.value
    });
  }

  showNewLayoutForm() {
    boundMethodCheck(this, LayoutsView);
    return this.setState({
      show_new_layout_form: true
    });
  }

  hideNewLayoutForm() {
    boundMethodCheck(this, LayoutsView);
    return this.setState({
      show_new_layout_form: false
    });
  }

  submitNewLayoutForm() {
    boundMethodCheck(this, LayoutsView);
    if (!this.state.new_layout_name_value) {
      return;
    }
    this.props.onCreateLayout(this.state.new_layout_name_value, this.state.new_layout_keys_value);
    return this.setState({
      new_layout_name_value: null,
      new_layout_keys_value: null,
      show_new_layout_form: false
    });
  }

  mapMenuLayoutButtons(layout, i) {
    boundMethodCheck(this, LayoutsView);
    return h(MenuTab, {
      key: i,
      // onClick: @togglePinMenu.bind(@,'layout')
      content: h(Input, {
        invalid: true,
        onClick: this.props.onSelectLayout.bind(null, layout),
        focus: layout === this.props.layouts[this.props.layout_index] ? false : void 0,
        btn_type: layout === this.props.layouts[this.props.layout_index] && 'primary',
        type: 'button',
        label: [
          layout.label.padEnd(MAX_CHAR),
          h('span',
          {
            className: css['model-grid-opaque']
          },
          String(layout.keys.length).padStart(3))
        ]
      })
    });
  }

  onDragEnd(e) {
    boundMethodCheck(this, LayoutsView);
    if (!e.destination) {
      return;
    }
    if (e.destination.droppableId === 'drop-out' && e.source.droppableId === 'drop-out') {
      this.state.unused_keys.splice(e.source.index, 1);
      return this.state.unused_keys.splice(e.destination.index, 0, e.draggableId);
    } else if (e.destination.droppableId === 'drop-in' && e.source.droppableId === 'drop-out') {
      this.state.unused_keys.splice(e.source.index, 1);
      return this.setKeyIndex(e.draggableId, e.destination.index, false);
    } else if (e.destination.droppableId === 'drop-in' && e.source.droppableId === 'drop-in') {
      return this.setKeyIndex(e.draggableId, e.destination.index, true);
    } else if (e.source.droppableId === 'drop-in' && e.destination.droppableId === 'drop-out') {
      this.state.unused_keys.splice(e.destination.index, 0, e.draggableId);
      return this.setKeyIndex(e.draggableId, -1);
    }
  }

  getActiveListStyle(dragging) {
    return {
      background: dragging && this.context.secondary.color[1] || this.context.secondary.color[0]
    };
  }

  getListStyle(dragging) {
    return {
      background: dragging && this.context.primary.inv[1] || this.context.primary.inv[0]
    };
  }

  getItemStyle(box, index, snapshot, style) {
    var bg, c, left, ref, ref1;
    boundMethodCheck(this, LayoutsView);
    // log style
    if (box === 'drop-in') {
      left = '0%';
      bg = this.context.secondary.color[1];
      c = this.context.secondary.inv[0];
    } else {
      left = '50%';
      bg = this.context.primary.inv[1];
      c = this.context.primary.color[0];
    }
    if (snapshot.isDragging) {
      if (snapshot.draggingOver === 'drop-in') {
        bg = this.context.secondary.color[2];
        c = this.context.secondary.inv[0];
      } else {
        bg = this.context.primary.inv[2];
        c = this.context.primary.color[0];
      }
    }
    return Object.assign({}, style, {
      height: DIM,
      left: style.left - ((ref = this._rect) != null ? ref.left : void 0) || 0,
      top: style.top - ((ref1 = this._rect) != null ? ref1.top : void 0) || 0,
      background: bg,
      color: c
    });
  }

  containerRef(el) {
    boundMethodCheck(this, LayoutsView);
    return this._rect = el != null ? el.getBoundingClientRect() : void 0;
  }

  // log @_rect
  renderForm() {
    return h('div', {
      className: css['methods-list-container-scroll-wrap'],
      ref: this.containerRef
    }, h('div', {
      className: css['methods-list-container-scroll']
    // onScroll: @onScroll
    }, h('div', {
      className: css['methods-list-container'],
      style: {
        background: this.context.primary.inv[0]
      }
    }, h(DragDropContext, {
      onDragEnd: this.onDragEnd
    }, h(Droppable, {
      droppableId: 'drop-in'
    }, (provided, snapshot) => {
      var props;
      props = Object.assign({}, provided.droppableProps, {
        ref: provided.innerRef,
        className: css['methods-list-container-box'],
        style: this.getActiveListStyle(snapshot.isDraggingOver)
      });
      return h('div', props, this.props.query_item.layout_keys.map((key_name, i) => {
        return h(Draggable, {
          key: key_name,
          draggableId: key_name,
          index: i
        }, (provided, snapshot) => {
          var item_props;
          item_props = Object.assign({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps, {
            className: css['methods-list-container-item'],
            style: this.getItemStyle('drop-in', i, snapshot, provided.draggableProps.style)
          });
          return h('div', item_props, this.props.keys[key_name].label);
        });
      }), provided.placeholder);
    }), h(Droppable, {
      droppableId: 'drop-out',
      isDropDisabled: this.props.query_item.layout_keys.length <= 1
    }, (provided, snapshot) => {
      var props;
      // log provided,snapshot
      props = Object.assign({}, provided.droppableProps, {
        ref: provided.innerRef,
        className: css['methods-list-container-box'],
        style: this.getListStyle(snapshot.isDraggingOver)
      });
      return h('div', props, this.state.unused_keys.map((key_name, i) => {
        return h(Draggable, {
          key: key_name,
          draggableId: key_name,
          index: i
        }, (provided, snapshot) => {
          var item_props;
          item_props = Object.assign({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps, {
            className: css['methods-list-container-item'],
            style: this.getItemStyle('drop-out', i, snapshot, provided.draggableProps.style)
          });
          return h('div', item_props, this.props.keys[key_name].label);
        });
      }), provided.placeholder);
    })))));
  }

  render() {
    var form_tab, tab_options;
    tab_options = {
      vert: true,
      big: false,
      force_split_x: -1,
      force_bar_dir_x: -1,
      force_split_y: 1,
      force_bar_dir_y: 1,
      onClickBackdrop: this.props.onHide,
      reveal: this.props.reveal,
      show_backdrop: this.props.reveal,
      content: h(Input, {
        onClick: this.props.onClick,
        type: 'button',
        btn_type: 'flat',
        i: 'view_week',
        label: [
          h('span',
          {
            key: 1,
            className: css['model-grid-slash']
          },
          '/'),
          String(this.props.query_item.layout_keys.length).padStart(2)
        ]
      })
    };
    if (this.props.reveal) {
      form_tab = this.renderForm();
    }
    return h(MenuTab, tab_options, form_tab);
  }

};

LayoutsView.contextType = StyleContext;

module.exports = LayoutsView;


/***/ }),

/***/ "./components/MenuView.coffee":
/*!************************************!*\
  !*** ./components/MenuView.coffee ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, BookmarksView, CreateDocView, Input, LayoutsView, MAX_CHAR, Menu, MenuTab, MenuView, MethodsView, SearchView, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

SearchView = __webpack_require__(/*! ./SearchView.coffee */ "./components/SearchView.coffee");

CreateDocView = __webpack_require__(/*! ./CreateDocView.coffee */ "./components/CreateDocView.coffee");

BookmarksView = __webpack_require__(/*! ./BookmarksView.coffee */ "./components/BookmarksView.coffee");

LayoutsView = __webpack_require__(/*! ./LayoutsView.coffee */ "./components/LayoutsView.coffee");

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MethodsView = __webpack_require__(/*! ./MethodsView.coffee */ "./components/MethodsView.coffee");

MAX_CHAR = 32;

MenuView = class MenuView extends Component {
  constructor(props) {
    super(props);
    // log @state
    this.togglePinMenu = this.togglePinMenu.bind(this);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      show_search_query_helper: false,
      show_new_layout_form: false,
      pin_menu_name: null,
      show_search_query_helper: false,
      search_query_value: null,
      search_value: null
    };
  }

  componentWillUpdate(props, state) {
    if (props.schema.name !== this.props.schema.name) {
      return Object.assign(state, this.getDefaultState());
    }
  }

  togglePinMenu(pin_menu_name, toggle) {
    boundMethodCheck(this, MenuView);
    this.setState({
      show_search_query_helper: false,
      show_new_layout_form: false,
      pin_menu_name: pin_menu_name
    });
    if (!pin_menu_name && !toggle) {
      return this.props.runQuery();
    }
  }

  getPinMenuBoolean(pin_menu_name, bool) {
    if (this.state.pin_menu_name === pin_menu_name) {
      return true;
    } else {
      if (bool) {
        return false;
      } else {
        return void 0;
      }
    }
  }

  render() {
    var bb, common_menu_schema, data, layouts_tab, left_menu_schema, model_statics_tab, model_title_tab, new_doc_tab, props, right_menu_schema, schema, search_tab, state;
    props = this.props;
    state = this.state;
    schema = props.schema;
    data = props.data;
    bb = props.bounding_box;
    common_menu_schema = {
      vert: false,
      bounding_box: bb,
      backdrop_color: this.context.primary.inv[3],
      onClickBackdrop: this.togglePinMenu.bind(this, null, false),
      hover_reveal_enabled: false,
      big: true
    };
    // LEFT MENU OPTIONS
    left_menu_schema = Object.assign({}, common_menu_schema, {
      key: 'left-menu',
      className: css['model-grid-list-menu-left'],
      force_split_y: 1,
      force_bar_dir_y: 1,
      split_y: 1
    });
    // RIGHT MENU OPTIONS
    right_menu_schema = Object.assign({}, common_menu_schema, {
      key: 'right-menu',
      className: css['model-grid-list-menu-right']
    });
    // MODEL TITLE TAB
    model_title_tab = h(MenuTab, {
      vert: true,
      show_backdrop: this.getPinMenuBoolean('models', true),
      reveal: this.getPinMenuBoolean('models', true),
      content: h(Input, {
        type: 'label',
        name: 'document',
        btn_type: 'flat',
        label: [
          props.filter && h('span',
          {
            key: 'label'
          },
          props.filter.label),
          props.filter && h('span',
          {
            key: 'slash',
            className: css['model-grid-slash']
          },
          '/'),
          h('span',
          {
            key: 'slabel',
            style: {
              fontWeight: 600,
              color: this.context.primary.color[0]
            }
          },
          schema.label)
        ]
      })
    });
    // MODEL STATICS TAB
    model_statics_tab = h(MenuTab, {
      vert: true,
      big: false,
      show_backdrop: this.getPinMenuBoolean('statics', true),
      onClick: this.togglePinMenu.bind(this, 'statics', true),
      reveal: this.getPinMenuBoolean('statics', true),
      content: h(Input, {
        type: 'button',
        btn_type: 'flat',
        i: 'more_vert'
      })
    }, h('div', {
      className: css['model-grid-statics-view'],
      style: {
        background: this.context.primary.inv[0]
      }
    }, h(MethodsView, {
      data_item: this.props.data_item,
      methods: schema.statics,
      renderDataItemMethod: this.props.renderDataItemMethod,
      runDataItemMethod: this.props.runDataItemMethod
    })));
    // ADD NEW DOCUMENT TAB / VIEW
    if (schema.form) {
      new_doc_tab = h(CreateDocView, {
        reveal: this.getPinMenuBoolean('add-doc', true),
        keys: schema.keys,
        form: schema.form,
        filter: props.filter,
        schema: schema,
        new_doc: props.new_doc,
        keys_array: schema.keys_array,
        onClick: this.togglePinMenu.bind(this, 'add-doc', true),
        onHide: this.togglePinMenu.bind(this, null, false),
        createDataItem: props.createDataItem
      });
    }
    // SEARCH TAB / VIEW
    search_tab = h(SearchView, {
      reveal: this.getPinMenuBoolean('search', true),
      onClick: this.togglePinMenu.bind(this, 'search', true),
      onHide: this.togglePinMenu.bind(this, null, false),
      updateQueryItemAndSet: props.updateQueryItemAndSet,
      updateQueryItem: props.updateQueryItem,
      cloneQueryItemAndSet: props.cloneQueryItemAndSet,
      cloneQueryItem: props.cloneQueryItem,
      runQuery: props.runQuery,
      setQueryItem: props.setQueryItem,
      schema: props.schema,
      queries: props.queries,
      queries_updated_at: props.queries_updated_at,
      bookmarks: props.bookmarks,
      bookmarks_updated_at: props.bookmarks_updated_at,
      keys_array: schema.keys_array,
      keys: schema.keys,
      query_item: props.query_item
    });
    // # LAYOUTS TAB / VIEW
    layouts_tab = h(LayoutsView, {
      reveal: this.getPinMenuBoolean('layouts', true),
      onClick: this.togglePinMenu.bind(this, 'layouts', true),
      onHide: this.togglePinMenu.bind(this, null, false),
      keys_array: schema.keys_array,
      runQuery: props.runQuery,
      updateQueryItemAndSet: props.updateQueryItemAndSet,
      updateQueryItem: props.updateQueryItem,
      cloneQueryItemAndSet: props.cloneQueryItemAndSet,
      cloneQueryItem: props.cloneQueryItem,
      setQueryItem: props.setQueryItem,
      keys: schema.keys,
      query_item: props.query_item
    });
    // BASE SLIDE
    return h(Slide, {
      dim: DIM2,
      vert: false,
      className: css['menu-slide']
    }, h(Menu, left_menu_schema, model_statics_tab, model_title_tab, new_doc_tab, search_tab), h(Menu, right_menu_schema, layouts_tab));
  }

};

MenuView.contextType = StyleContext;

module.exports = MenuView;


/***/ }),

/***/ "./components/MethodsView.coffee":
/*!***************************************!*\
  !*** ./components/MethodsView.coffee ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, Input, MAX_CHAR, Menu, MenuTab, MethodsView, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

Slide = __webpack_require__(/*! re-slide */ "re-slide");

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MAX_CHAR = 31;

MethodsView = class MethodsView extends Component {
  constructor(props) {
    super(props);
    this.onRenderMethodRes = this.onRenderMethodRes.bind(this);
    this.onMethodClick = this.onMethodClick.bind(this);
    this.hideMethodRender = this.hideMethodRender.bind(this);
    this.mapMethods = this.mapMethods.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.hideConfirmDelete = this.hideConfirmDelete.bind(this);
    this.state = {
      render_method: null,
      method_res: null
    };
  }

  onRenderMethodRes(res) {
    boundMethodCheck(this, MethodsView);
    return this.setState({
      method_res: res
    });
  }

  onMethodClick(method) {
    boundMethodCheck(this, MethodsView);
    log(method);
    if (method.run) {
      return method.run(method);
    } else if (method.render) {
      return this.setState({
        render_method: method
      });
    } else {
      return this.props.runDataItemMethod(method);
    }
  }

  hideMethodRender() {
    boundMethodCheck(this, MethodsView);
    return this.setState({
      render_method: null,
      method_res: null
    });
  }

  mapMethods(method, i) {
    boundMethodCheck(this, MethodsView);
    if (this.state.render_method != null) {
      if (this.state.render_method !== method) {
        return null;
      }
    }
    if (method.isVisible && !method.isVisible(this.props.data_item)) {
      return null;
    }
    return h(Input, {
      key: method.name,
      onClick: this.onMethodClick.bind(this, method),
      type: 'button',
      btn_type: 'flat',
      i: method.icon || (method.run && 'settings') || (method.render && 'subject' || 'play_arrow'),
      label: method.label || method.name
    });
  }

  confirmDelete() {
    boundMethodCheck(this, MethodsView);
    return this.setState({
      confirm_delete: true
    });
  }

  hideConfirmDelete() {
    boundMethodCheck(this, MethodsView);
    return this.setState({
      confirm_delete: false
    });
  }

  render() {
    if (this.state.render_method) {
      return h(Slide, {
        vert: true
      }, h(Bar, {
        vert: false,
        big: true
      }, h(Input, {
        type: 'button',
        i: 'close',
        onClick: this.hideMethodRender
      }), h(Input, {
        label: this.state.render_method.label,
        type: 'label'
      })), h('div', {
        className: css['methods-list-render-view']
      }, this.state.render_method && this.props.renderDataItemMethod(this.state.render_method, this.onRenderMethodRes, this.state.method_res)));
    }
    return h(Slide, {
      vert: true
    }, this.props.render_edit_bar && (h(Bar, {
      vert: true,
      big: true
    }, h(Bar, {
      vert: false,
      big: true
    }, h(Input, {
      type: 'button',
      i: 'code',
      onClick: this.props.showJSONView,
      label: 'edit'
    }), this.props.onDelete && h(Input, {
      type: 'button',
      i: 'delete',
      onClick: this.props.onDelete
    })))) || null, this.props.methods && h('div', {
      className: css['data-item-method-menu']
    }, h(Bar, {
      vert: true,
      big: false
    }, this.props.methods.map(this.mapMethods))));
  }

};

MethodsView.contextType = StyleContext;

module.exports = MethodsView;


/***/ }),

/***/ "./components/ModelGrid.coffee":
/*!*************************************!*\
  !*** ./components/ModelGrid.coffee ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {  // Color = require 'color'
var AlertDot, AlertOverlay, Bar, CodeEditor, Color, Component, GridView, Input, JsonView, Menu, MenuTab, MenuView, ModelGrid, Overlay, Slide, StyleContext, cn, createElement, css, highlight, languages, rfc6902,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({createElement, Component} = __webpack_require__(/*! react */ "react"));

global.h = createElement;

global.Component = Component;

Slide = __webpack_require__(/*! re-slide */ "re-slide");

Color = __webpack_require__(/*! color */ "color");

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

({Input, MenuTab, Menu, Bar, Overlay, AlertOverlay, StyleContext, AlertDot} = __webpack_require__(/*! re-lui */ "re-lui"));

JsonView = __webpack_require__(/*! ./JsonView.coffee */ "./components/JsonView.coffee");

rfc6902 = __webpack_require__(/*! rfc6902 */ "./node_modules/rfc6902/index.js");

// require 'colors'
CodeEditor = __webpack_require__(/*! react-simple-code-editor */ "./node_modules/react-simple-code-editor/lib/index.js").default;

({highlight, languages} = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js"));

__webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");

__webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");

__webpack_require__(/*! prismjs/themes/prism-twilight.css */ "./node_modules/prismjs/themes/prism-twilight.css");

global.DIM2 = 40;

global.DIM = 30;

MenuView = __webpack_require__(/*! ./MenuView.coffee */ "./components/MenuView.coffee");

GridView = __webpack_require__(/*! ./GridView.coffee */ "./components/GridView.coffee");

ModelGrid = class ModelGrid extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.getDefaultConfig = this.getDefaultConfig.bind(this);
    this.selectDataItem = this.selectDataItem.bind(this);
    this.mapQueryItems = this.mapQueryItems.bind(this);
    this.setQueryItem = this.setQueryItem.bind(this);
    this.setQueryItemLabel = this.setQueryItemLabel.bind(this);
    this.cloneQueryItemAndSet = this.cloneQueryItemAndSet.bind(this);
    this.updateQueryItemAndSet = this.updateQueryItemAndSet.bind(this);
    this.cloneQueryItem = this.cloneQueryItem.bind(this);
    this.updateQueryItem = this.updateQueryItem.bind(this);
    this.cleanQuery = this.cleanQuery.bind(this);
    this.hideQueryItemRunError = this.hideQueryItemRunError.bind(this);
    this.setQueryItemRunError = this.setQueryItemRunError.bind(this);
    this.mapDataItems = this.mapDataItems.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.runStaticMethod = this.runStaticMethod.bind(this);
    this.runDataItemMethod = this.runDataItemMethod.bind(this);
    this.renderDataItemMethod = this.renderDataItemMethod.bind(this);
    this.setActionMethodError = this.setActionMethodError.bind(this);
    this.setActionStaticError = this.setActionStaticError.bind(this);
    this.clearActionQueryError = this.clearActionQueryError.bind(this);
    this.createDataItem = this.createDataItem.bind(this);
    this.deleteDataItem = this.deleteDataItem.bind(this);
    this.updateDataItem = this.updateDataItem.bind(this);
    this.getDataItem = this.getDataItem.bind(this);
    // getChildContext: ->
    // 	gridHeight: @base?.clientHeight - (@props.show_bar && DIM || 0)
    this.componentDidMount = this.componentDidMount.bind(this);
    // log 'DID MOUNT'
    // @forceUpdate()
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    this.showJSONView = this.showJSONView.bind(this);
    this.closeJSONView = this.closeJSONView.bind(this);
    this.onEditorValueChange = this.onEditorValueChange.bind(this);
    this.baseRef = this.baseRef.bind(this);
    this.state = this.getDefaultConfig(props);
    this.g_props = {
      selectDataItem: this.selectDataItem,
      updateDataItem: this.updateDataItem,
      deleteDataItem: this.deleteDataItem,
      createDataItem: this.createDataItem,
      showJSONView: this.showJSONView,
      setQueryItem: this.setQueryItem,
      updateQueryItemAndSet: this.updateQueryItemAndSet,
      updateQueryItem: this.updateQueryItem,
      cloneQueryItemAndSet: this.cloneQueryItemAndSet,
      cloneQueryItem: this.cloneQueryItem,
      runQuery: this.runQuery,
      runDataItemMethod: this.runDataItemMethod,
      runStaticMethod: this.runStaticMethod,
      updateSelectedDocument: this.updateSelectedDocument,
      renderDataItemMethod: this.renderDataItemMethod
    };
  }

  log() {
    boundMethodCheck(this, ModelGrid);
    return console.log('%c [modelgrid]', 'color:yellow', arguments[0] || '', arguments[1] || '', arguments[2] || '', arguments[3] || '', arguments[4] || '', arguments[5] || '');
  }

  getDefaultConfig(props) {
    boundMethodCheck(this, ModelGrid);
    return {
      queries: [],
      query_map: new Map, // map <query_item>
      data: new Map, // <query._id> : [<data_item>]
      queries_updated_at: 0,
      is_visible: false,
      bookmarks: [],
      query_item: this.createQueryItem({
        key: '_id',
        type: 'key'
      }),
      action_query: {
        data_item_id: null,
        called_at: 0,
        completed_at: 0
      },
      editor_patches: [],
      editor_error: null,
      editor_value: '{}',
      data_item: null,
      new_doc: {}
    };
  }

  selectDataItem(item) {
    var base;
    boundMethodCheck(this, ModelGrid);
    if (!this.state.data_item || this.state.data_item._id !== item._id) {
      this.setState({
        data_item: Object.assign({}, item)
      });
      return typeof (base = this.props).onSelectDataItem === "function" ? base.onSelectDataItem(this.state.data_item) : void 0;
    }
  }

  mapQueryItems(props, state) {
    var j, len, q, ref, ref1;
    boundMethodCheck(this, ModelGrid);
    // @log 'update query items'
    state = state || this.state;
    props = props || this.props;
    state.bookmarks = [];
    ref = state.queries;
    for (j = 0, len = ref.length; j < len; j++) {
      q = ref[j];
      if (q.label) {
        state.bookmarks.push(q);
      }
      state.query_map.set(q._id, q);
      if (((ref1 = state.query_item) != null ? ref1._id : void 0) === q._id) {
        state.query_item = q;
      }
    }
    return state.bookmarks_updated_at = Date.now();
  }

  setQueryItem(query_item, run_query_once) {
    boundMethodCheck(this, ModelGrid);
    query_item.skip = 0;
    return this.setState({
      run_query_once: run_query_once,
      query_item: query_item
    });
  }

  resetQueryItemLabel(query_item) {
    var is_key, j, key, keys, len;
    keys = Object.keys(query_item.value);
    query_item.label = void 0;
    is_key = true;
    for (j = 0, len = keys.length; j < len; j++) {
      key = keys[j];
      if (key !== query_item.key) { //&& filter_keys.indexOf(key) == -1
        is_key = false;
        break;
      }
    }
    if (is_key) {
      query_item.type = 'key';
      return query_item.input_value = query_item.value[query_item.key];
    } else {
      query_item.type = 'json';
      return query_item.input_value = JSON.stringify(query_item.value);
    }
  }

  setQueryItemLabel(query_item, label) {
    var b, j, len, ref;
    boundMethodCheck(this, ModelGrid);
    if (!label) {
      return;
    }
    ref = this.state.bookmarks;
    for (j = 0, len = ref.length; j < len; j++) {
      b = ref[j];
      if (b.label === label || b._id === this.state.query_item._id) {
        return;
      }
    }
    query_item.label = label;
    query_item.type = 'bookmark';
    query_item.input_value = '#' + label;
    return query_item.saved_at = Date.now();
  }

  createQueryItem(query_item) {
    return {
      sort_keys: (query_item != null ? query_item.sort_keys : void 0) || {},
      layout_keys: (query_item != null ? query_item.layout_keys : void 0) || ['_id'],
      key: (query_item != null ? query_item.key : void 0) || props.schema.keys_array[0],
      label: query_item != null ? query_item.label : void 0,
      skip: 0,
      type: query_item != null ? query_item.type : void 0,
      value: query_item != null ? query_item.value : void 0,
      limit: this.props.query_limit || 100,
      input_value: (query_item != null ? query_item.input_value : void 0) || "",
      call_count: 0,
      _id: Date.now().toString(24)
    };
  }

  decideQueryItemType(query_item) {
    if (query_item.input_value[0] === '{') {
      return query_item.type = 'json';
    } else if (query_item.input_value[0] === '#') {
      return query_item.type = 'bookmark';
    } else {
      return query_item.type = 'key';
    }
  }

  syncQueryItem(query_item) {
    var error, obj, q_value;
    if (query_item.type === 'key') {
      q_value = {};
      query_item.error = null;
      q_value[query_item.key || query_item.key] = query_item.input_value;
      return query_item.value = q_value;
    } else if (query_item.type === 'json') {
      try {
        obj = eval('(' + query_item.input_value + ')');
        query_item.value = obj;
        return query_item.error = null;
      } catch (error1) {
        error = error1;
        return query_item.error = error.message;
      }
    }
  }

  findQueryItemBookmark(query_item) {
    var n_q, query_label;
    if (query_item.type !== 'bookmark') {
      return;
    }
    query_label = query_item.input_value.substring(1);
    // m_r = new RegExp(query_label,"ig")
    query_item.match_label = null;
    query_item.match_label_part = null;
    if (query_label) {
      n_q = this.state.bookmarks.find(function(b) {
        if (!query_item.match_label) {
          if (b.label.indexOf(query_label) >= 0) {
            query_item.match_label = b.label;
            query_item.match_label_q = query_label;
          }
        }
        if (b.label === query_label) {
          return true;
        }
        return false;
      });
      if (!n_q) {
        return null;
      } else {
        return n_q;
      }
    } else {
      return null;
    }
  }

  cloneQueryItemAndSet(schema, query_item, run_query_once) {
    boundMethodCheck(this, ModelGrid);
    query_item = this.cloneQueryItem(schema, query_item);
    this.mapQueryItems();
    return this.setQueryItem(query_item, run_query_once);
  }

  updateQueryItemAndSet(schema, query_item) {
    boundMethodCheck(this, ModelGrid);
    this.updateQueryItem(schema, query_item);
    this.mapQueryItems();
    return this.setQueryItem(query_item);
  }

  cloneQueryItem(schema, query_item) {
    boundMethodCheck(this, ModelGrid);
    query_item = this.createQueryItem(query_item);
    if (query_item.label) {
      this.resetQueryItemLabel(query_item);
    }
    Object.assign(query_item, schema);
    this.decideQueryItemType(query_item);
    
    // # find bookmark
    // found_query = @findQueryItemBookmark(query_item)
    // if found_query
    // 	return found_query

    // set value (check for errors etc)
    this.syncQueryItem(query_item);
    return query_item;
  }

  setQueryItemFilter(query_item) {
    if (this.props.filter) {
      return query_item.filter_value = this.props.filter(this.props.schema, query_item);
    }
  }

  updateQueryItem(schema, query_item) {
    var found_query;
    boundMethodCheck(this, ModelGrid);
    if (!query_item.label && schema.label) {
      this.setQueryItemLabel(query_item, schema.label);
      this.mapQueryItems();
    } else if (query_item.label && schema.label === false) {
      this.resetQueryItemLabel(query_item);
      this.mapQueryItems();
    }
    Object.assign(query_item, schema);
    // decide type
    this.decideQueryItemType(query_item);
    
    // find bookmark
    found_query = this.findQueryItemBookmark(query_item);
    if (found_query) {
      return this.setState({
        query_item: found_query,
        run_query_once: true
      });
    }
    
    // set value (check for errors etc)
    this.syncQueryItem(query_item);
    // if schema.label = false
    // 	@mapQueryItems()
    return query_item;
  }

  cleanQuery() {
    var j, k, key, len, len1, pop, qp, ref, ref1;
    boundMethodCheck(this, ModelGrid);
    if (this.state.query_item.type === 'key') {
      if (!this.state.query_item.input_value) {
        this.state.query_item.type = 'json';
        this.state.query_item.value = {};
        this.state.query_item.input_value = '{}';
      }
    }
    if (this.state.query_item.layout_keys.length === 0) {
      this.state.query_item.layout_keys[0] = '_id';
    }
    this.state.query_item.hidden_layout_keys = [];
    ref = this.state.query_item.layout_keys;
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      if (this.props.schema.keys[key].keys_array) {
        this.state.query_item.hidden_layout_keys = this.state.query_item.hidden_layout_keys.concat(this.props.schema.keys[key].keys_array);
      }
    }
    this.state.query_item.populate = [];
    if (this.props.schema.populate) {
      ref1 = this.state.query_item.layout_keys;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        key = ref1[k];
        pop = this.props.schema.populate.find(function(_pop) {
          return key.indexOf(_pop) === 0;
        });
        if (!pop) {
          continue;
        }
        qp = this.state.query_item.populate.find(function(_qp) {
          return _qp.path === pop;
        });
        if (!qp) {
          qp = {
            select: [],
            path: pop
          };
          this.state.query_item.populate.push(qp);
        }
        qp.select.push(key.substring(pop.length + 1));
      }
    }
    return this.setQueryItemFilter(this.state.query_item);
  }

  hideQueryItemRunError() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      query_item_run_error_visible: false
    });
  }

  setQueryItemRunError(query_item, error) {
    boundMethodCheck(this, ModelGrid);
    query_item.error = error.message;
    query_item.completed_at = Date.now();
    return this.setState({
      query_item_run_error_visible: true,
      query_item_run_error: {
        error: error,
        query_item: query_item
      }
    });
  }

  mapDataItems() {
    var data, item, j, len, state_data_item_found;
    boundMethodCheck(this, ModelGrid);
    state_data_item_found = false;
    if (!this.state.data_item) {
      return;
    }
    data = this.state.data.get(this.state.query_item._id);
    for (j = 0, len = data.length; j < len; j++) {
      item = data[j];
      if (item._id === this.state.data_item._id) {
        state_data_item_found = true;
        break;
      }
    }
    if (state_data_item_found && this.state.show_json_view) {
      return this.state.get_data_item = true;
    } else if (!state_data_item_found) {
      return this.state.data_item = null;
    }
  }

  runQuery(run_next) {
    var h_i, q, q_i, s_q_i;
    boundMethodCheck(this, ModelGrid);
    this.cleanQuery();
    if (this.state.query_item.error) {
      return;
    }
    this.state.query_item.called_at = Date.now();
    this.state.query_item.completed_at = null;
    this.state.query_item.call_count = this.state.query_item.call_count || 0;
    this.state.query_item.call_count += 1;
    if (run_next === true) {
      this.state.query_item.skip += this.state.query_item.limit;
    } else {
      this.state.query_item.skip = 0;
      this.state.query_item.end_reached = false;
    }
    h_i = -1;
    q = this.state.queries.find((q, i) => {
      if (q._id === this.state.query_item._id) {
        h_i = i;
        return true;
      }
      return false;
    });
    if (h_i > 0) {
      this.state.data_item = null;
      this.state.queries.splice(h_i, 1);
      this.state.queries.unshift(this.state.query_item);
      this.state.queries_updated_at = Date.now();
    } else if (h_i < 0) {
      this.state.data_item = null;
      this.state.queries.unshift(this.state.query_item);
      this.state.queries_updated_at = Date.now();
    }
    s_q_i = this.state.query_item;
    q_i = Object.assign({}, this.state.query_item);
    this.state.query_item.error = void 0;
    this.props.runQuery(q_i).then((data) => {
      var current_data;
      if (q_i._id !== this.state.query_item._id) {
        return this.setQueryItemRunError(q_i, new Error('previously ran query does not match current state query ' + q_i._id + ' != ' + this.state.query_item._id));
      }
      current_data = this.state.data.get(this.state.query_item._id) || [];
      if (!run_next) {
        current_data = [];
      }
      this.state.data.set(this.state.query_item._id, current_data.concat(data));
      this.state.query_item.completed_at = Date.now();
      if (data.length < this.state.query_item.limit) {
        this.state.query_item.end_reached = true;
      }
      // @log 'runQuery completed',@state.query_item._id,(@state.query_item.completed_at - @state.query_item.called_at)+'ms','#'+data.length
      this.mapDataItems();
      return this.forceUpdate();
    }).catch(this.setQueryItemRunError.bind(this, s_q_i));
    return this.setState({
      run_query_once: false
    });
  }

  runStaticMethod(method) {
    var prom;
    boundMethodCheck(this, ModelGrid);
    this.setState({
      action_query: {
        data_item_id: '~',
        data_item_label: this.props.schema.name,
        action: method.name,
        called_at: Date.now()
      }
    });
    if (method.fn) {
      prom = method.fn(this.props.schema, method);
    } else {
      prom = this.props.runStaticMethod(this.props.schema, method);
    }
    return prom.then((method_res) => {
      this.state.action_query.completed_at = Date.now();
      return this.runQuery();
    }).catch(this.setActionStaticError);
  }

  runDataItemMethod(method, callback) {
    var prom;
    boundMethodCheck(this, ModelGrid);
    if (methods.run) {
      return method.run(method);
    }
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        action: method.name,
        called_at: Date.now()
      }
    });
    if (method.fn) {
      prom = method.fn(this.props.schema, this.state.data_item, method);
    } else {
      prom = this.props.runDataItemMethod(this.props.schema, this.state.data_item, method);
    }
    return prom.then((res) => {
      this.state.action_query.completed_at = Date.now();
      this.setState({
        data_item: Object.assign({}, res.data_item)
      });
      this.runQuery();
      return typeof callback === "function" ? callback(res) : void 0;
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  renderDataItemMethod(method, get_method_res_callback, method_res) {
    var method_exec;
    boundMethodCheck(this, ModelGrid);
    // log get_method_res_callback
    method_exec = this.runDataItemMethod.bind(this, method, get_method_res_callback);
    return method.render(this.props.schema, this.state.data_item, method_exec, method_res);
  }

  setActionMethodError(data_item, error) {
    boundMethodCheck(this, ModelGrid);
    this.setState({
      query_item_run_error_visible: false,
      action_error: {
        data_item: data_item,
        error: error
      }
    });
    return false;
  }

  setActionStaticError(error) {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      query_item_run_error_visible: false,
      action_error: {
        error: error
      }
    });
  }

  clearActionQueryError() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      action_query: {},
      action_error: null
    });
  }

  createDataItem() {
    boundMethodCheck(this, ModelGrid);
    // @log 'create data item'
    this.setState({
      action_query: {
        data_item_id: JSON.stringify(this.state.new_doc),
        action: 'create',
        called_at: Date.now()
      }
    });
    return this.props.createDataItem(this.state.new_doc).then((created_doc) => {
      this.log('created data_item', created_doc);
      this.state.action_query.completed_at = Date.now();
      this.state.data_item = Object.assign({}, created_doc);
      return this.runQuery();
    }).catch(this.setActionMethodError.bind(this, this.state.new_doc));
  }

  deleteDataItem() {
    boundMethodCheck(this, ModelGrid);
    // @log 'delete data item'
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        action: 'delete',
        called_at: Date.now()
      }
    });
    return this.props.deleteDataItem(this.state.data_item._id).then((deleted_doc_id) => {
      // @log 'deleted data_item',deleted_doc_id
      this.state.action_query.completed_at = Date.now();
      if (this.state.data_item._id === deleted_doc_id) {
        this.setState({
          data_item: null
        });
      }
      return this.runQuery();
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  updateDataItem() {
    boundMethodCheck(this, ModelGrid);
    if (!this.state.action_query.completed_at && this.state.action_query.called_at || !this.state.editor_patches.length) {
      return;
    }
    if (this.state.editor_value_id !== this.state.data_item._id) {
      return;
    }
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        body: this.state.editor_patches,
        action: 'update',
        called_at: Date.now()
      }
    });
    return this.props.updateDataItem(this.state.editor_value_id, this.state.editor_patches).then((doc) => {
      // @log 'updated data_item',doc
      this.state.editor_value_id = null;
      this.state.action_query.completed_at = Date.now();
      if (this.state.data_item._id === doc._id) {
        this.setState({
          data_item: doc
        });
      }
      return this.runQuery();
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  getDataItem() {
    boundMethodCheck(this, ModelGrid);
    if (!this.state.action_query.completed_at && this.state.action_query.called_at) {
      return;
    }
    this.setState({
      action_query: {
        body: {},
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        called_at: Date.now(),
        action: 'get'
      }
    });
    return this.props.getDataItem(this.state.data_item._id).then((doc) => {
      // @log 'got data_item',doc
      this.state.action_query.completed_at = Date.now();
      this.state.editor_value_id = null;
      if (this.state.data_item._id === doc._id) {
        return this.setState({
          data_item: doc
        });
      }
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  componentWillMount() {
    var j, len, q, ref;
    Object.assign(this.state, this.props.schema_state);
    this.state.schema_state_id = this.props.schema_state_id;
    this.mapQueryItems();
    ref = this.state.queries;
    for (j = 0, len = ref.length; j < len; j++) {
      q = ref[j];
      if (q.called_at && !q.completed_at) {
        q.called_at = q.completed_at = 0;
      }
    }
    // log 'mount and run query'
    return this.runQuery();
  }

  componentDidUpdate(props, state) {
    var base, save_state, split_vert;
    save_state = Object.assign({}, {
      queries: this.state.queries,
      query_item: this.state.query_item,
      data_item: this.state.data_item,
      show_json_view: this.state.show_json_view,
      new_doc: this.state.new_doc
    });
    if (this.state.run_query_once) {
      this.runQuery();
    }
    if (typeof (base = this.props).onSchemaStateUpdated === "function") {
      base.onSchemaStateUpdated(save_state);
    }
    if (this.state.get_data_item || (this.state.data_item && this.state.show_json_view && ((this.state.show_json_view !== state.show_json_view) || this.state.action_query.data_item_id !== this.state.data_item._id))) {
      this.state.get_data_item = false;
      this.getDataItem();
    }
    split_vert = (this.base && this.base.clientHeight > this.base.clientWidth) ? true : false;
    if (split_vert !== this.state.split_vert) {
      this.setState({
        split_vert: split_vert
      });
    }
    if (this.state.show_json_view !== state.show_json_view) {
      this.forceUpdate();
    }
    if (props.run_query_item !== this.props.run_query_item) {
      this.log("RUN PROPS QUERY ITEM");
      return this.cloneQueryItemAndSet(this.props.run_query_item, this.state.query_item, true);
    }
  }

  componentDidMount() {
    boundMethodCheck(this, ModelGrid);
  }

  componentWillUpdate(props, state) {
    boundMethodCheck(this, ModelGrid);
    // log props.schema_state_id,state.schema_state_id
    if (props.schema_state_id !== state.schema_state_id) {
      state.schema_state_id = props.schema_state_id;
      Object.assign(state, this.getDefaultConfig(props));
      Object.assign(state, props.schema_state);
      state.run_query_once = true;
    }
    if (state.queries_updated_at !== this.state.queries_updated_at) {
      this.mapQueryItems(props, state);
    }
    if (!state.data_item) {
      state.show_json_view = false;
    }
    if (state.query_item !== this.state.query_item) {
      state.show_json_view = false;
    }
    if (state.data_item) {
      if (state.data_item._id !== state.editor_value_id) {
        if (state.data_item) {
          state.editor_value = JSON.stringify(state.data_item, null, 4);
          state.editor_patches = [];
        } else {
          state.editor_value = "{}";
          state.editor_patches = [];
        }
        return state.editor_value_id = state.data_item._id;
      }
    } else {
      state.editor_value = '{}';
      return state.editor_patches = [];
    }
  }

  showJSONView() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      show_json_view: true
    });
  }

  closeJSONView() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      show_json_view: false
    });
  }

  onEditorValueChange(val) {
    var editor_error, err, new_data_item, patches;
    boundMethodCheck(this, ModelGrid);
    try {
      new_data_item = JSON.parse(val);
      patches = rfc6902.createPatch(this.state.data_item, new_data_item);
      if (patches.length > 3) {
        editor_error = 'patch count > 3';
      }
      return this.setState({
        editor_patches: patches,
        editor_value: val,
        editor_error: editor_error || null
      });
    } catch (error1) {
      err = error1;
      return this.setState({
        editor_value: val,
        editor_error: err.message
      });
    }
  }

  baseRef(slide) {
    boundMethodCheck(this, ModelGrid);
    this.base = (slide != null ? slide._outer : void 0) || void 0;
    if (this.base) {
      return this.setState({
        is_visible: true
      });
    } else {
      return this.setState({
        is_visible: false
      });
    }
  }

  render() {
    var overlay, ref, ref1, style;
    window[this.props.schema.name + '_grid'] = this;
    if (this._pc !== this.context.primary.color[0]) {
      this._pc = this.context.primary.color[0];
      this._pc_is_dark = !Color(this._pc).isDark();
      this._pc_opaque = Color(this._pc).alpha(0.8).rgb().string();
    }
    this.g_props.bounding_box = (ref = this.base) != null ? ref.getBoundingClientRect() : void 0;
    this.g_props.data = this.state.data.get(this.state.query_item._id) || [];
    this.g_props.queries = this.state.queries;
    this.g_props.bookmarks = this.state.bookmarks;
    this.g_props.query_map = this.state.query_map;
    this.g_props.query_item = this.state.query_item;
    this.g_props.data_item = this.state.data_item;
    this.g_props.new_doc = this.state.new_doc;
    this.g_props.action_query = this.state.action_query;
    this.g_props.schema = this.props.schema;
    this.g_props.row_height = this.props.schema.row_height || 30;
    this.g_props.scroll_query_beta_offset = this.props.scroll_query_beta_offset;
    this.g_props.show_json_view = this.state.show_json_view;
    this.g_props.queries_updated_at = this.state.queries_updated_at;
    this.g_props.methods = this.props.methods;
    this.g_props.filter = this.props.filter;
    if (this.state.query_item_run_error) {
      overlay = h(AlertOverlay, {
        initial_visible: false,
        alert_type: 'error',
        visible: this.state.query_item_run_error_visible,
        backdrop_color: this.context.primary.inv[2],
        message: this.state.query_item_run_error.error.message,
        onClick: this.hideQueryItemRunError,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, h(Input, {
        label: 'errored query value',
        type: 'textarea',
        btn_type: 'flat',
        select: false,
        hover: false,
        // disabled: yes
        bar: true,
        is_valid: false,
        value: JSON.stringify(this.state.query_item_run_error.query_item.value, 4, 4)
      }));
    } else {
      overlay = h(AlertOverlay, {
        initial_visible: false,
        backdrop_color: this.context.primary.inv[2],
        alert_type: 'error',
        transparent: true,
        visible: (this.state.action_error != null) || !this.state.action_query.completed_at && this.state.action_query.called_at,
        message: (ref1 = this.state.action_error) != null ? ref1.error.message : void 0,
        onClick: this.state.action_error && this.clearActionQueryError || void 0,
        // z_index: 9999
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, h(Input, {
        className: css['overlay-label-button'],
        big: false,
        type: 'label',
        style: {
          background: this._pc_opaque,
          color: this.context.primary.inv[0]
        },
        label: [
          h('span',
          {
            key: 1,
            style: {
              fontWeight: 600,
              color: this.context.primary.color[0]
            }
          },
          this.state.action_query.action),
          h('span',
          {
            key: 2,
            className: css['model-grid-slash']
          },
          '/'),
          this.state.action_query.data_item_label || this.state.action_query.data_item_id
        ]
      }));
    }
    style = {};
    style.visiblity = this.state.is_visible && 'visible' || 'hidden';
    style.transform = 'translate(0px)';
    return h(Slide, {
      ref: this.baseRef,
      slide: true,
      beta: this.props.beta,
      style: Object.assign(style, this.props.style),
      className: css['model-grid'],
      pos: !this.state.show_json_view && 1 || 0,
      vert: false,
      outerChildren: overlay
    }, h(Slide, {
      className: css['react-json-wrap'],
      style: {
        background: this.context.primary.inv[1]
      },
      beta: 50,
      vert: true
    }, h(Bar, {
      big: true
    }, h(Input, {
      style: {
        width: '50%',
        whiteSpace: 'nowrap'
      },
      type: 'label',
      btn_type: 'primary',
      disabled: !this.state.editor_error,
      i: this.state.editor_error && 'error' || 'check',
      label: this.state.editor_error || 'ok'
    }), h(Input, {
      type: 'button',
      i: 'save',
      btn_type: 'primary',
      style: {
        maxWidth: 'fit-content'
      },
      label: String(this.state.editor_patches.length).padEnd(2),
      disabled: !this.state.editor_patches.length || (this.state.editor_error != null),
      onClick: this.updateDataItem
    }, this.state.editor_patches.length > 0 && h(AlertDot)), h(Input, {
      type: 'button',
      i: 'refresh',
      // btn_type: 'primary'
      onClick: this.getDataItem
    }), h(Input, {
      type: 'button',
      i: 'close',
      // btn_type: 'primary'
      onClick: this.closeJSONView
    })), h(Slide, {
      className: cn(css['react-json-container'], this._pc_is_dark && css['dark'] || css['light'])
    }, this.state.show_json_view && this.state.data_item && h(CodeEditor, {
      value: this.state.editor_value || '{}',
      onValueChange: this.onEditorValueChange,
      highlight: function(code) {
        return highlight(code, languages.json);
      },
      padding: 13,
      style: {
        fontFamily: 'monor, monospace',
        height: 'fit-content',
        fontSize: 13
      }
    })), h(Slide, {
      dim: DIM2,
      vert: true,
      scroll: true,
      style: {
        background: this.context.primary.inv[1]
      }
    }, this.state.editor_patches.map((patch, i) => {
      return h(JsonView, {
        key: 'patch-' + i,
        style: {
          width: '100%',
          background: i % 2 !== 0 && this.context.primary.inv[2],
          padding: 13
        },
        json: patch,
        trim: true,
        colors: {
          key: this.context.primary.color[1],
          number: 'orange',
          string: this.context.primary.true,
          boolean: this.context.primary.false
        }
      });
    }))), h(Slide, {
      vert: true,
      style: {
        transform: 'translate(0)'
      },
      beta: this.state.show_json_view && 50 || 100
    }, h(MenuView, this.g_props), h(GridView, this.g_props)));
  }

};

ModelGrid.contextType = StyleContext;

ModelGrid.defaultProps = {
  show_bar: true,
  query_limit: 100,
  scroll_query_beta_offset: 2
};

module.exports = ModelGrid;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/ModelGrid.less":
/*!***********************************!*\
  !*** ./components/ModelGrid.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-1!../node_modules/less-loader/dist/cjs.js!./ModelGrid.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./components/ModelGrid.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/SearchView.coffee":
/*!**************************************!*\
  !*** ./components/SearchView.coffee ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AlertDot, Bar, CellMeasurer, CellMeasurerCache, Input, JsonView, List, MAX_CHAR, Menu, MenuTab, SEARCH_BAR_WIDTH, SearchView, Slide, SquareLoader, StyleContext, cn, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({AlertDot, Input, MenuTab, Menu, Bar, SquareLoader, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

JsonView = __webpack_require__(/*! ./JsonView.coffee */ "./components/JsonView.coffee");

({List} = __webpack_require__(/*! react-virtualized/dist/commonjs/List */ "react-virtualized/dist/commonjs/List"));

({CellMeasurer, CellMeasurerCache} = __webpack_require__(/*! react-virtualized/dist/commonjs/CellMeasurer */ "react-virtualized/dist/commonjs/CellMeasurer"));

MAX_CHAR = 32;

SEARCH_BAR_WIDTH = 400;

SearchView = class SearchView extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSearchEnter = this.onSearchEnter.bind(this);
    this.setQueryItemLabel = this.setQueryItemLabel.bind(this);
    this.unsaveQueryItem = this.unsaveQueryItem.bind(this);
    this.saveQueryItem = this.saveQueryItem.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
    this.mouseEnterMenuIcon = this.mouseEnterMenuIcon.bind(this);
    this.mouseLeaveMenuIcon = this.mouseLeaveMenuIcon.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.setSearchKey = this.setSearchKey.bind(this);
    this.createOrUpdateQueryItem = this.createOrUpdateQueryItem.bind(this);
    this.listRef = this.listRef.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.renderQueryListItem = this.renderQueryListItem.bind(this);
    this.renderBookmarkItem = this.renderBookmarkItem.bind(this);
    this.mapMenuSearchKeys = this.mapMenuSearchKeys.bind(this);
    this.showView = this.showView.bind(this);
    this.hideView = this.hideView.bind(this);
    this.showInfoOptions = this.showInfoOptions.bind(this);
    this.hideInfoOptions = this.hideInfoOptions.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.searchRef = this.searchRef.bind(this);
    this.toggleQueryInterval = this.toggleQueryInterval.bind(this);
    this.onRunQuery = this.onRunQuery.bind(this);
    window.sq = this;
    this.state = {
      query_item: props.query_item,
      show_info_options: false,
      query_item_label: null,
      clicked_run_query_at: 0
    };
  }

  onFocus() {
    boundMethodCheck(this, SearchView);
    if (this.state.run_query_interval) {
      this.toggleQueryInterval();
    }
    if (this.props.query_item.called_at && this.props.reveal) {
      this.props.cloneQueryItemAndSet({
        label: false
      }, this.props.query_item);
    }
    return this.props.onClick();
  }

  onSearchEnter() {
    boundMethodCheck(this, SearchView);
    if (!this.props.query_item.called_at && this.props.query_item.type === 'bookmark') {
      if (this.props.query_item.match_label) {
        this.setSearchValue({
          target: {
            value: '#' + this.props.query_item.match_label
          }
        });
      }
    }
    // @state.force_update_grid = true
    // @state.force_render_grid = true
    this._cell_cache.clearAll();
    return this.props.onHide();
  }

  // @props.runQuery()
  buildCache() {
    return this._cell_cache = new CellMeasurerCache({
      defaultHeight: 30,
      fixedWidth: true,
      fixedHeight: false
    });
  }

  setQueryItemLabel(e) {
    boundMethodCheck(this, SearchView);
    return this.setState({
      query_item_label: e.target.value
    });
  }

  unsaveQueryItem() {
    boundMethodCheck(this, SearchView);
    this.props.updateQueryItem({
      label: false
    }, this.props.query_item);
    return this.setState({
      show_info_options: false,
      query_item_label: null,
      force_render_grid: true
    });
  }

  saveQueryItem() {
    boundMethodCheck(this, SearchView);
    this.props.updateQueryItemAndSet({
      label: this.state.query_item_label
    }, this.props.query_item);
    return this.setState({
      show_info_options: false,
      query_item_label: null,
      force_render_grid: true
    });
  }

  onClickIcon(e) {
    boundMethodCheck(this, SearchView);
    if (this.props.query_item.type !== 'bookmark') {
      this.createOrUpdateQueryItem({
        input_value: '#'
      }, this.props.query_item);
    } else if (this.props.query_item.label) {
      this.props.cloneQueryItemAndSet({
        input_value: '#'
      }, this.props.query_item);
    }
    if (!this.props.reveal) {
      return this.props.onClick();
    }
  }

  mouseEnterMenuIcon() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      hover_menu_icon: true
    });
  }

  mouseLeaveMenuIcon() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      hover_menu_icon: false
    });
  }

  setSearchValue(e) {
    boundMethodCheck(this, SearchView);
    return this.createOrUpdateQueryItem({
      input_value: e.target.value
    });
  }

  setSearchKey(key) {
    boundMethodCheck(this, SearchView);
    return this.createOrUpdateQueryItem({
      key: key
    });
  }

  createOrUpdateQueryItem(q_opts) {
    boundMethodCheck(this, SearchView);
    if (this.props.query_item.called_at) {
      return this.props.cloneQueryItemAndSet(q_opts, this.props.query_item);
    } else {
      this.props.updateQueryItem(q_opts, this.props.query_item);
      return this.forceUpdate();
    }
  }

  componentWillMount(props) {
    return this.buildCache();
  }

  componentWillUpdate(props, state) {
    var ref;
    if (props.query_item._id !== this.props.query_item._id || props.reveal !== this.props.reveal || props.queries_updated_at !== this.props.queries_updated_at || props.bookmarks_updated_at !== this.props.bookmarks_updated_at) {
      if (props.queries_updated_at !== this.props.queries_updated_at) {
        if ((ref = this._cell_cache) != null) {
          ref.clearAll();
        }
      }
      // log props.queries.indexOf(props.query_item)
      state.scroll_queries_index = props.queries.indexOf(props.query_item);
      // state.force_update_grid = true
      return state.force_render_grid = true;
    }
  }

  componentDidUpdate(props, state) {
    var ref;
    if (this.state.force_render_grid) {
      return (ref = this._list) != null ? ref.forceUpdateGrid() : void 0;
    }
  }

  listRef(el) {
    boundMethodCheck(this, SearchView);
    return this._list = el;
  }

  selectItem(query_item) {
    boundMethodCheck(this, SearchView);
    return this.props.setQueryItem(query_item, true);
  }

  renderQueryListItem(r_opts) {
    var bot_right, cell_bg, cell_color, is_selected, query_item;
    boundMethodCheck(this, SearchView);
    query_item = this.props.queries[r_opts.index];
    if (!query_item) {
      return false;
    }
    
    // r_opts.style.height = 'auto'
    is_selected = this.props.query_item._id === query_item._id;
    // log is_selected,query_item.label || query_item._id

    // log is_selected
    if (is_selected) {
      cell_bg = this.context.secondary.color[0];
      cell_color = this.context.secondary.inv[1];
    } else {
      cell_bg = (r_opts.index % 2) && this.context.primary.inv[1] || null;
      cell_color = this.context.primary.color[3];
    }
    bot_right = null;
    if (query_item.error) {
      bot_right = h('div', {
        className: css['search-query-error']
      }, query_item.error);
    } else if (query_item.called_at && !query_item.completed_at) {
      bot_right = h(SquareLoader, {
        background: this.context.secondary.color[1],
        is_loading: true
      });
    }
    return h(CellMeasurer, {
      cache: this._cell_cache,
      rowIndex: r_opts.index,
      key: r_opts.key,
      parent: r_opts.parent
    }, h('div', {
      style: r_opts.style,
      className: cn(css['model-grid-search-query-l-item'], is_selected && css['model-grid-search-query-l-item-sel']),
      onClick: this.selectItem.bind(this, query_item)
    }, h('div', {
      style: {
        color: cell_color,
        background: cell_bg
      },
      className: css['json']
    }, h(JsonView, {
      json: query_item.value,
      trim: true,
      colors: {
        key: !is_selected && this.context.primary.color[1] || this.context.secondary.inv[1],
        number: 'orange',
        string: this.context.primary.true,
        boolean: this.context.primary.false
      }
    }), query_item.filter_value && (h(JsonView, {
      json: query_item.filter_value,
      trim: true,
      style: {
        opacity: 0.3
      },
      colors: {
        key: !is_selected && this.context.primary.color[2] || this.context.secondary.inv[2],
        number: 'orange',
        string: this.context.primary.true,
        boolean: this.context.primary.false
      }
    })) || null, h('div', {
      className: css['search-query-item-label']
    }, query_item.label && '#' + query_item.label || null, query_item.label && h('i', {
      className: 'material-icons'
    }, 'bookmark'), query_item.call_count), bot_right && (h('div', {
      className: css['search-query-item-label2']
    }, bot_right)) || null)));
  }

  renderBookmarkItem(r_opts) {
    var is_selected, query_item;
    boundMethodCheck(this, SearchView);
    // log 'render bookmark'
    query_item = this.props.bookmarks[r_opts.index];
    is_selected = this.props.query_item._id === query_item._id;
    r_opts.style.background = (r_opts.index % 2) && this.context.primary.inv[1] || null;
    return h('div', {
      key: query_item.label,
      style: r_opts.style,
      onClick: this.selectItem.bind(this, query_item),
      className: cn(css['model-grid-search-bookmark-item'])
    }, h('span', {
      className: css['model-grid-opaque']
    }, '#'), h('span', {}, query_item.label), h('span', {
      className: css['search-query-item-label']
    }, query_item.call_count));
  }

  renderBookmarksList(height) {
    return h(List, {
      height: height,
      width: SEARCH_BAR_WIDTH,
      key: 'bookmarks',
      rowHeight: 30,
      rowCount: this.props.bookmarks.length,
      rowRenderer: this.renderBookmarkItem
    });
  }

  renderQueryList(height) {
    var scroll_queries_index;
    scroll_queries_index = this.state.scroll_queries_index;
    this.state.scroll_queries_index = void 0;
    return h(List, {
      height: height,
      width: SEARCH_BAR_WIDTH,
      ref: this.listRef,
      key: 'queries-' + this.props.queries_updated_at,
      scrollToAlignment: 'start',
      scrollToIndex: scroll_queries_index,
      rowHeight: this._cell_cache.rowHeight,
      rowCount: this.props.queries.length,
      deferredMeasurementCache: this._cell_cache,
      rowRenderer: this.renderQueryListItem
    });
  }

  renderBookmarkOptions() {
    return [
      h(MenuTab,
      {
        key: 1,
        content: h(Input,
      {
          type: 'button',
          i: 'remove_circle',
          onClick: this.unsaveQueryItem,
          // onEntr: @saveQueryItem
          // value: @state.query_item_label
          // placeholder: 'max '+MAX_CHAR+' char'
          style: {
            background: this.context.primary.warn,
            color: 'white'
          },
          label: 'forget'
        })
      })
    ];
  }

  renderSaveForm() {
    return [
      h(MenuTab,
      {
        key: 'save',
        content: h(Input,
      {
          type: 'input',
          onInput: this.setQueryItemLabel,
          onEntr: this.saveQueryItem,
          value: this.state.query_item_label || '',
          placeholder: 'max ' + MAX_CHAR + ' char',
          label: 'label'
        })
      })
    ];
  }

  mapMenuSearchKeys(key_name, i) {
    var key, ref;
    boundMethodCheck(this, SearchView);
    key = this.props.keys[key_name];
    if (!key) {
      throw new Error('key does not exist,' + key_name);
    }
    if ((ref = this.props.filter) != null ? ref.query_value[key_name] : void 0) {
      return null;
    }
    if (!key.indexed) {
      return null;
    }
    return h(MenuTab, {
      key: i,
      content: h(Input, {
        onClick: this.setSearchKey.bind(null, key_name),
        focus: key_name === this.props.query_item.key ? false : void 0,
        btn_type: key_name === this.props.query_item.key && 'primary' || 'default',
        type: 'button',
        label: [
          h('span',
          {
            key: 'label'
          },
          key.label.padEnd(10)),
          h('span',
          {
            key: 'key',
            className: css['model-grid-label-float-right'] + ' ' + css['model-grid-opaque']
          },
          String(key_name))
        ]
      })
    });
  }

  renderKeysView() {
    return h(Bar, {
      vert: true,
      style: {
        background: this.context.primary.inv[1]
      },
      className: css['search-keys-container']
    }, this.props.keys_array.map(this.mapMenuSearchKeys));
  }

  showView() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      show_search_view: true
    });
  }

  hideView() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      hide_search_view: true
    });
  }

  showInfoOptions() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      show_info_options: true
    });
  }

  hideInfoOptions() {
    boundMethodCheck(this, SearchView);
    return this.setState({
      show_info_options: false
    });
  }

  onKeyDown(e) {
    boundMethodCheck(this, SearchView);
    if (e.keyCode === 27) {
      this._search.blur();
      return this.props.onHide(e);
    }
  }

  searchRef(el) {
    boundMethodCheck(this, SearchView);
    if (!el) {
      return;
    }
    return this._search = el._input;
  }

  toggleQueryInterval() {
    var q_i;
    boundMethodCheck(this, SearchView);
    if (this.state.run_query_interval) {
      clearInterval(this.state.run_query_interval);
      return this.setState({
        run_query_interval: void 0
      });
    } else {
      q_i = setInterval(this.props.runQuery, 3000);
      return this.setState({
        run_query_interval: q_i
      });
    }
  }

  onRunQuery() {
    boundMethodCheck(this, SearchView);
    // if Date.now() - @state.clicked_run_query_at < 300
    // 	@toggleQueryInterval()
    // @setState
    // 	clicked_run_query_at: Date.now()
    return this.props.runQuery();
  }

  render() {
    var bar_style, info_bar, info_btn_type, info_fn, info_i, info_label, info_options, info_type, l_q_i, l_q_l, pad_label, props, qi, query_item_is_loading, query_list, query_tab_height, refresh_query_button, search_i, search_input, search_input_label, search_input_label_value, search_placeholder, state, suggest;
    props = this.props;
    state = this.state;
    qi = props.query_item;
    pad_label = 15;
    query_item_is_loading = qi.called_at && !qi.completed_at;
    if (qi.match_label) {
      l_q_i = qi.match_label.indexOf(qi.match_label_q);
      l_q_l = qi.match_label_q.length;
      // log l_q_i+l_q_l
      suggest = [
        qi.match_label.substring(0,
        l_q_i),
        h('span',
        {
          key: 2,
          style: {
            color: this.context.primary.true
          }
        },
        qi.match_label_q),
        qi.match_label.substring(l_q_i + l_q_l)
      ];
    }
    info_btn_type = 'default';
    if (qi.type === 'json') {
      search_i = 'code';
      search_placeholder = '{query}';
      info_label = qi.error || 'ok';
      info_i = qi.error && 'error' || 'error_outline';
      info_type = 'label';
    } else if (qi.type === 'key') {
      search_placeholder = 'search by ' + props.keys[qi.key].label;
      info_label = [
        'search by ',
        h('span',
        {
          key: 2,
          style: {
            color: this.context.primary.true
          }
        },
        qi.key)
      ];
      info_i = 'menu';
      info_type = 'button';
    } else if (qi.type === 'bookmark') {
      search_i = 'bookmark';
      search_placeholder = '#[bookmark name]';
      info_label = suggest || 'search bookmarks';
      if (suggest) {
        info_i = 'help';
        info_type = 'button';
        info_fn = this.setSearchValue.bind(this, {
          target: {
            value: '#' + qi.match_label
          }
        });
      } else {
        info_i = 'more_horiz';
        info_type = 'label';
      }
    }
    if (qi.called_at) {
      if (qi.label) {
        info_i = 'settings';
        info_label = 'bookmark options';
        info_type = 'button';
        info_fn = this.showInfoOptions; //@unsaveQueryItem
      } else {
        info_i = 'bookmark';
        info_label = h('div', {}, 'save ', h('span', {
          style: {
            opacity: .5
          }
        }, props.query_item._id));
        
        info_type = 'button';
        if (this.state.query_item_label) {
          info_fn = this.saveQueryItem;
        } else {
          // info_btn_type = 'primary'
          info_fn = this.showInfoOptions;
        }
      }
    }
    // info_btn_type = 'default' 
    if (props.query_item.called_at) {
      info_btn_type = 'primary';
    } else {
      info_btn_type = 'default';
    }
    if (props.query_item.label && !props.reveal) {
      search_input_label = true;
      search_input_label_value = h('span', {
        className: css['search-query-menu-search-label']
      }, qi.input_value);
    }
    // log qi
    if (qi.error) {
      bar_style = {
        background: this.context.secondary.false
      };
    }
    if (query_item_is_loading) {
      bar_style = {
        background: qi.error && this.context.secondary.false || this.context.secondary.color[2]
      };
    }
    search_input = h(Input, {
      onFocus: this.onFocus,
      ref: this.searchRef,
      type: search_input_label && 'button' || 'input',
      input_props: {
        autoComplete: 'false',
        spellCheck: 'false',
        autoCorrect: 'false',
        autoCapitalize: 'false'
      },
      btn_type: 'flat',
      style: {
        paddingLeft: 0,
        background: 'none',
        // color: qi.type == 'json' && @context.secondary.color[2] || @context.primary.color[0]
        width: SEARCH_BAR_WIDTH - 40 - 40
      },
      value: qi.input_value,
      bar_style: bar_style,
      onInput: this.setSearchValue,
      onEnter: this.onSearchEnter,
      bar: true,
      onClick: search_input_label && props.onClick,
      placeholder: search_placeholder
    }, search_input_label_value);
    refresh_query_button = h(Input, {
      type: 'button',
      btn_type: 'flat',
      i_type: query_item_is_loading && 'primary' || 'flat',
      i: 'play_arrow',
      onClick: this.onRunQuery,
      outer_props: {
        onDoubleClick: this.toggleQueryInterval
      }
    }, this.state.run_query_interval && h(AlertDot));
    search_i = h(Slide, {
      vert: true,
      width: 40,
      height: 40,
      slide: true,
      pos: query_item_is_loading ? 0 : 1,
      className: css['search-query-menu-icon']
    }, h(Slide, {
      beta: 100,
      center: true
    }, h(SquareLoader, {
      background: !qi.error && this.context.primary.color[0] || this.context.primary.false,
      is_loading: query_item_is_loading && !qi.error
    })), h(Slide, {
      vert: false,
      slide: true,
      beta: 100,
      onMouseEnter: this.mouseEnterMenuIcon,
      onMouseLeave: this.mouseLeaveMenuIcon,
      onClick: this.onClickIcon,
      pos: this.state.hover_menu_icon && 2 || (qi.type === 'bookmark' && 2 || qi.type === 'key' && 1 || qi.type === 'json' && 0)
    }, h(Slide, {
      beta: 100,
      center: true
    }, h('i', {
      className: 'material-icons'
    }, 'code')), h(Slide, {
      beta: 100,
      center: true
    }, h('i', {
      className: 'material-icons'
    }, 'search')), h(Slide, {
      beta: 100,
      center: true
    }, h('i', {
      className: 'material-icons'
    }, 'bookmark'))));
    search_placeholder = '#tag | {json} | key';
    if (qi.called_at && !qi.label) {
      info_options = this.renderSaveForm();
    } else if (qi.label) {
      info_options = this.renderBookmarkOptions();
    } else if (qi.type === 'key') {
      info_options = this.renderKeysView();
      info_fn = this.showInfoOptions;
    }
    // log info_fn
    info_bar = h(Input, {
      i: info_i,
      style: {
        width: SEARCH_BAR_WIDTH,
        overflow: 'hidden'
      },
      onClick: info_fn,
      type: info_type,
      btn_type: info_btn_type,
      // select: info
      label: info_label
    });
    query_tab_height = 260;
    if ((this.context.gridHeight != null) && (this.context.gridHeight - 30) < 260) {
      query_tab_height = this.context.gridHeight - 30;
    }
    
    // log qi
    if (props.reveal) {
      if (qi.type === 'bookmark' && !qi.called_at) {
        query_list = this.renderBookmarksList(query_tab_height);
      } else {
        query_list = this.renderQueryList(query_tab_height);
      }
    }
    return h(MenuTab, {
      vert: true,
      big: false,
      tab_style: {
        width: SEARCH_BAR_WIDTH
      },
      bar_style: {
        width: SEARCH_BAR_WIDTH
      },
      reveal: props.reveal,
      show_backdrop: props.reveal,
      onClickBackdrop: props.onHide,
      onKeyDown: this.onKeyDown,
      content: h(Bar, {
        big: true,
        style: {
          transition: 'background 0.3s ease',
          background: props.reveal && this.context.primary.inv[1] || this.context.primary.inv[0]
        }
      }, refresh_query_button, search_i, search_input),
      force_split_y: 1,
      force_bar_dir_y: 1,
      split_y: 1
    }, h(MenuTab, {
      click_reveal_enabled: false,
      content: info_bar,
      show_backdrop: info_options && this.state.show_info_options,
      reveal: info_options && this.state.show_info_options || false,
      onClickBackdrop: info_options && this.hideInfoOptions
    }, info_options), h(MenuTab, {
      tab_style: {
        height: query_tab_height,
        background: this.context.primary.inv[0]
      },
      content: query_list
    }));
  }

};

SearchView.contextType = StyleContext;

module.exports = SearchView;


/***/ }),

/***/ "./components/index.coffee":
/*!*********************************!*\
  !*** ./components/index.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ModelGrid;

ModelGrid = __webpack_require__(/*! ./ModelGrid.coffee */ "./components/ModelGrid.coffee");

module.exports = ModelGrid;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/number/is-integer.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/number/is-integer.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/number/is-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.number.is-integer.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Number.isInteger;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.number.is-integer.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.number.is-integer.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/*! exports provided: getRect, expand, shrink, createBox, offset, withScroll, calculateBox, getBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrink", function() { return shrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBox", function() { return createBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBox", function() { return calculateBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBox", function() { return getBox; });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  !(suffix === 'px') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Expected value to be a pixel value.\n      Expected form: 10px\n      Actual value: " + raw + "\n    ") : undefined : void 0;
  var result = Number(value);
  !!isNaN(result) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : undefined : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./components/ModelGrid.less":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/less-loader/dist/cjs.js!./components/ModelGrid.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lui-g-model-grid {\n  font-family: \"monor\", monospace;\n  font-size: 13px;\n  transform: translate(0);\n  height: 100%;\n  width: 100%;\n}\n.lui-g-model-grid ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 8px;\n  height: 8px;\n}\n.lui-g-model-grid ::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.lui-g-model-grid ::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background-color: #7F7F7F;\n  transition: background-color 0.3s ease;\n}\n.lui-g-model-grid ::-webkit-scrollbar-thumb:hover {\n  background-color: #8F8F8F;\n}\n.lui-g-model-grid-wrap {\n  transform: translate(0);\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-statics-view {\n  width: 400px;\n  min-height: 250px;\n}\n.lui-g-model-grid-slash {\n  opacity: 0.4;\n  padding: 0px 4px;\n}\n.lui-g-model-grid-slash-right {\n  opacity: 0.4;\n  padding-right: 4;\n}\n.lui-g-model-grid-key-toggle {\n  width: 30px;\n  height: 30px;\n}\n.lui-g-model-grid-slide {\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-opaque {\n  opacity: 0.5;\n}\n.lui-g-model-grid-add-doc-form {\n  max-height: 300px;\n  height: fit-content;\n  overflow-y: scroll;\n}\n.lui-g-search-query-menu-search-label {\n  white-space: nowrap;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.lui-g-search-query-error {\n  color: red;\n  background: rgba(0, 0, 0, 0.5);\n}\n.lui-g-model-grid-label-float-right {\n  right: 10px;\n  position: absolute;\n}\n.lui-g-model-grid-search-bookmark-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-family: \"monor\", monospace;\n  opacity: 0.8;\n}\n.lui-g-model-grid-search-bookmark-item:hover {\n  opacity: 1;\n}\n.ReactVirtualized__Grid__innerScrollContainer {\n  min-width: 100%;\n}\n.lui-g-model-grid-cell-method-button {\n  width: 30px !important;\n}\n.lui-g-search-query-item-label2 {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  transform: scale(0.8);\n  max-width: 200px;\n  min-width: 20px;\n  min-height: 20px;\n}\n.lui-g-search-query-item-label2 .lui-g-search-query-error {\n  overflow-x: scroll;\n  overflow-y: visible;\n  padding: 5px;\n}\n.lui-g-search-query-item-label {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  opacity: 0.7;\n  padding: 8px;\n  padding-right: 14px;\n  right: 0;\n  top: 0;\n}\n.lui-g-search-query-item-label i {\n  font-size: 16px;\n  padding-right: 6px;\n}\n.lui-g-model-grid-search-query-l-item {\n  height: auto !important;\n  min-height: 30px;\n  font-family: \"monor\", monospace;\n}\n.lui-g-model-grid-search-query-l-item .lui-g-json {\n  position: relative;\n  min-height: 30px;\n  margin: 0;\n  overflow-wrap: break-word;\n  padding: 8px;\n  font-size: 11px;\n  color: grey;\n  cursor: pointer;\n  white-space: pre;\n}\n* {\n  outline: none;\n}\n.lui-g-menu-slide {\n  overflow: visible !important;\n}\n.lui-g-model-grid-cell-method-button {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px !important;\n  width: 30px;\n  opacity: 0.2;\n  transition: opacity 0.3s;\n  cursor: pointer;\n}\n.lui-g-model-grid-cell-method-button:hover {\n  opacity: 1;\n}\n.lui-g-search-keys-container {\n  width: auto;\n  height: 230px;\n  min-width: 200px;\n  overflow-y: scroll;\n}\n.lui-g-search-query-menu-icon {\n  cursor: pointer;\n}\n.lui-g-search-query-menu-icon i {\n  margin: 0;\n}\n.lui-g-model-grid-search-query-view {\n  width: 400px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.lui-g-data-item-method-menu {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\n.lui-g-model-grid-key {\n  cursor: pointer;\n}\n.lui-g-model-grid-key .lui-g-model-grid-key-toggle {\n  opacity: 0.5;\n  transition: opacity 0.3s ease;\n  line-height: inherit;\n}\n.lui-g-model-grid-key:hover .lui-g-model-grid-key-toggle {\n  opacity: 1;\n}\n.lui-g-model-grid-key-toggle {\n  line-height: 30px;\n}\n.lui-g-grid-item-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 10px;\n}\n.lui-g-model-grid-cell {\n  display: flex;\n  cursor: pointer;\n  height: 100%;\n  align-items: center;\n  vertical-align: middle;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  padding: 0px 10px;\n}\n.lui-g-model-grid-cell .lui-g-model-grid-label {\n  float: left;\n}\n.lui-g-model-grid-cell input {\n  font-family: \"monor\", monospace;\n  font-size: 13px;\n  margin-left: -10px;\n  transition: background 0.3s ease;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  outline: none;\n}\n.lui-g-model-grid-cell input::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.lui-g-react-json-wrap {\n  position: relative;\n  transform: translate(0);\n}\n.lui-g-react-json-container {\n  overflow: scroll;\n}\n.lui-g-react-json-container.lui-g-dark .number {\n  color: #ff7a00;\n}\n.lui-g-react-json-container.lui-g-dark .string {\n  color: #32e03f;\n}\n.lui-g-react-json-container.lui-g-dark .property {\n  color: #e7e7e7;\n}\n.lui-g-react-json-container.lui-g-dark .operator,\n.lui-g-react-json-container.lui-g-dark .punctuation {\n  color: #929292;\n}\n.lui-g-react-json-container.lui-g-light .number {\n  color: #a14e03;\n}\n.lui-g-react-json-container.lui-g-light .string {\n  color: #1c7122;\n}\n.lui-g-react-json-container.lui-g-light .property {\n  color: #121212;\n}\n.lui-g-react-json-container.lui-g-light .operator,\n.lui-g-react-json-container.lui-g-light .punctuation {\n  color: #878787;\n}\n.lui-g-json-editor-menu {\n  position: fixed !important;\n  height: fit-content !important;\n  width: fit-content !important;\n  bottom: 8px;\n  margin: 0px;\n  left: 0px;\n  right: unset;\n}\n.lui-g-json-editor-menu.lui-g-vert {\n  top: 0px;\n  right: 8px;\n  left: unset;\n}\n.lui-g-model-grid-list-menu-right {\n  width: 100%;\n  flex-shrink: 1 !important;\n  flex-direction: row-reverse;\n}\n.lui-g-model-grid-list-layout-button {\n  width: 140px;\n}\n.lui-g-methods-list-container-scroll-wrap {\n  transform: translate(0);\n  height: 170px;\n  width: 100%;\n  min-width: 500px;\n}\n.lui-g-methods-list-container-scroll {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: relative;\n}\n.lui-g-methods-list-container {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  height: fit-content;\n}\n.lui-g-methods-list-container .lui-g-methods-list-container-box {\n  display: block;\n  transition: background 0.3s ease;\n  overflow: visible;\n  flex-direction: column;\n  height: auto;\n  width: 100%;\n  min-height: fit-content;\n}\n.lui-g-methods-list-container-item {\n  display: flex;\n  z-index: 10;\n  min-height: 30;\n  vertical-align: center;\n  padding: 0px 10px;\n  align-items: center;\n}\n.lui-g-methods-list-container-item::before {\n  content: '=';\n  opacity: 0.3;\n  padding-right: 10px;\n}\n.lui-g-methods-list-render-view {\n  overflow-y: scroll;\n  min-height: 100%;\n  padding: 10px;\n}\n.lui-g-vert-right-bar {\n  border-radius: 2.14285714px;\n  width: 4.28571429px;\n  height: 60px;\n  position: absolute;\n  right: 17.85714286px;\n  top: calc(50% - 30px);\n}\n.lui-g-vert-left-bar {\n  border-radius: 2.14285714px;\n  width: 4.28571429px;\n  height: 60px;\n  position: absolute;\n  left: 17.85714286px;\n  top: calc(50% - 30px);\n}\n.lui-g-overlay-label-button {\n  position: fixed !important;\n  margin: 12px !important;\n  left: 0 !important;\n  top: 0 !important;\n}\n.lui-g-overlay-label-button * {\n  color: inherit !important;\n}\n", ""]);

// exports
exports.locals = {
	"model-grid": "lui-g-model-grid",
	"model-grid-wrap": "lui-g-model-grid-wrap",
	"model-grid-statics-view": "lui-g-model-grid-statics-view",
	"model-grid-slash": "lui-g-model-grid-slash",
	"model-grid-slash-right": "lui-g-model-grid-slash-right",
	"model-grid-key-toggle": "lui-g-model-grid-key-toggle",
	"model-grid-slide": "lui-g-model-grid-slide",
	"model-grid-opaque": "lui-g-model-grid-opaque",
	"model-grid-add-doc-form": "lui-g-model-grid-add-doc-form",
	"search-query-menu-search-label": "lui-g-search-query-menu-search-label",
	"search-query-error": "lui-g-search-query-error",
	"model-grid-label-float-right": "lui-g-model-grid-label-float-right",
	"model-grid-search-bookmark-item": "lui-g-model-grid-search-bookmark-item",
	"model-grid-cell-method-button": "lui-g-model-grid-cell-method-button",
	"search-query-item-label2": "lui-g-search-query-item-label2",
	"search-query-item-label": "lui-g-search-query-item-label",
	"model-grid-search-query-l-item": "lui-g-model-grid-search-query-l-item",
	"json": "lui-g-json",
	"menu-slide": "lui-g-menu-slide",
	"search-keys-container": "lui-g-search-keys-container",
	"search-query-menu-icon": "lui-g-search-query-menu-icon",
	"model-grid-search-query-view": "lui-g-model-grid-search-query-view",
	"data-item-method-menu": "lui-g-data-item-method-menu",
	"model-grid-key": "lui-g-model-grid-key",
	"grid-item-label": "lui-g-grid-item-label",
	"model-grid-cell": "lui-g-model-grid-cell",
	"model-grid-label": "lui-g-model-grid-label",
	"react-json-wrap": "lui-g-react-json-wrap",
	"react-json-container": "lui-g-react-json-container",
	"dark": "lui-g-dark",
	"light": "lui-g-light",
	"json-editor-menu": "lui-g-json-editor-menu",
	"vert": "lui-g-vert",
	"model-grid-list-menu-right": "lui-g-model-grid-list-menu-right",
	"model-grid-list-layout-button": "lui-g-model-grid-list-layout-button",
	"methods-list-container-scroll-wrap": "lui-g-methods-list-container-scroll-wrap",
	"methods-list-container-scroll": "lui-g-methods-list-container-scroll",
	"methods-list-container": "lui-g-methods-list-container",
	"methods-list-container-box": "lui-g-methods-list-container-box",
	"methods-list-container-item": "lui-g-methods-list-container-item",
	"methods-list-render-view": "lui-g-methods-list-render-view",
	"vert-right-bar": "lui-g-vert-right-bar",
	"vert-left-bar": "lui-g-vert-left-bar",
	"overlay-label-button": "lui-g-overlay-label-button"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shallowEqual = function shallowEqual(newValue, oldValue) {
  return newValue === oldValue;
};

var simpleIsEqual = function simpleIsEqual(newArgs, lastArgs) {
  return newArgs.length === lastArgs.length && newArgs.every(function (newArg, index) {
    return shallowEqual(newArg, lastArgs[index]);
  });
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prismjs/components/prism-clike.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-clike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),

/***/ "./node_modules/prismjs/components/prism-core.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/components/prism-json.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.json = {
	'property': /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		greedy: true
	},
	'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	'punctuation': /[{}[\]);,]/,
	'operator': /:/g,
	'boolean': /\b(?:true|false)\b/i,
	'null': /\bnull\b/i
};

Prism.languages.jsonp = Prism.languages.json;


/***/ }),

/***/ "./node_modules/prismjs/themes/prism-twilight.css":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-twilight.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index = (function (fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(undefined, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  var resultFn = wrapperFn;

  return resultFn;
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/*! exports provided: DragDropContext, Droppable, Draggable, resetServerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropContext", function() { return DragDropContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return ConnectedDroppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ConnectedDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetServerContext", function() { return resetServerContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14__);
















var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var isEqual$1 = function isEqual(first, second) {
  return first.top === second.top && first.right === second.right && first.bottom === second.bottom && first.left === second.left;
};
var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

var records = {};
var isEnabled = false;

var isTimingsEnabled = function isTimingsEnabled() {
  return isEnabled;
};
var start = function start(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    var previous = records[key];

    if (!previous) {
      console.warn('cannot finish timing as no previous time found', key);
      return;
    }

    var result = now - previous;
    var rounded = result.toFixed(2);

    var style = function () {
      if (result < 12) {
        return {
          textColor: 'green',
          symbol: '✅'
        };
      }

      if (result < 40) {
        return {
          textColor: 'orange',
          symbol: '⚠️'
        };
      }

      return {
        textColor: 'red',
        symbol: '❌'
      };
    }();

    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold;', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
  }
};

var whatIsDraggedOver = (function (impact) {
  var merge = impact.merge,
      destination = impact.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (merge) {
    return merge.combine.droppableId;
  }

  return null;
});

function values(map) {
  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default()(map);
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}

var toDroppableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggables) {
  return values(draggables);
});

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPositionInFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
});

var getDroppableOver = (function (_ref) {
  var target = _ref.target,
      droppables = _ref.droppables;
  var maybe = find(toDroppableList(droppables), function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    var active = droppable.subject.active;

    if (!active) {
      return false;
    }

    return isPositionInFrame(active)(target);
  });
  return maybe ? maybe.descriptor.id : null;
});

var getDraggablesInsideDroppable = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

var withDroppableScroll = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.value);
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isUserMovingForward = (function (axis, direction) {
  return axis === vertical ? direction.vertical === 'down' : direction.horizontal === 'right';
});

var didStartDisplaced = (function (draggableId, onLift) {
  return Boolean(onLift.wasDisplaced[draggableId]);
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      onLift = _ref.onLift,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced[combineWith]);

  if (didStartDisplaced(combineWith, onLift)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var getWhenEntered = function getWhenEntered(id, current, oldMerge) {
  if (!oldMerge) {
    return current;
  }

  if (id !== oldMerge.combine.draggableId) {
    return current;
  }

  return oldMerge.whenEntered;
};

var isCombiningWith = function isCombiningWith(_ref) {
  var id = _ref.id,
      currentCenter = _ref.currentCenter,
      axis = _ref.axis,
      borderBox = _ref.borderBox,
      displaceBy = _ref.displaceBy,
      currentUserDirection = _ref.currentUserDirection,
      oldMerge = _ref.oldMerge;
  var start = borderBox[axis.start] + displaceBy[axis.line];
  var end = borderBox[axis.end] + displaceBy[axis.line];
  var size = borderBox[axis.size];
  var twoThirdsOfSize = size * 0.666;
  var whenEntered = getWhenEntered(id, currentUserDirection, oldMerge);
  var isMovingForward = isUserMovingForward(axis, whenEntered);
  var targetCenter = currentCenter[axis.line];

  if (isMovingForward) {
    return isWithin(start, start + twoThirdsOfSize)(targetCenter);
  }

  return isWithin(end - twoThirdsOfSize, end)(targetCenter);
};

var getCombineImpact = (function (_ref2) {
  var currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
      previousImpact = _ref2.previousImpact,
      destination = _ref2.destination,
      insideDestinationWithoutDraggable = _ref2.insideDestinationWithoutDraggable,
      userDirection = _ref2.userDirection,
      onLift = _ref2.onLift;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var map = previousImpact.movement.map;
  var canBeDisplacedBy = previousImpact.movement.displacedBy;
  var oldMerge = previousImpact.merge;
  var target = find(insideDestinationWithoutDraggable, function (child) {
    var id = child.descriptor.id;
    var displaceBy = getCombinedItemDisplacement({
      displaced: map,
      onLift: onLift,
      combineWith: id,
      displacedBy: canBeDisplacedBy
    });
    return isCombiningWith({
      id: id,
      currentCenter: currentCenter,
      axis: axis,
      borderBox: child.page.borderBox,
      displaceBy: displaceBy,
      currentUserDirection: userDirection,
      oldMerge: oldMerge
    });
  });

  if (!target) {
    return null;
  }

  var merge = {
    whenEntered: getWhenEntered(target.descriptor.id, userDirection, oldMerge),
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };

  var withMerge = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousImpact, {
    destination: null,
    merge: merge
  });

  return withMerge;
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(forceShouldAnimate, isVisible, previous) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!isVisible) {
    return false;
  }

  if (!previous) {
    return true;
  }

  return previous.shouldAnimate;
};

var getTarget = function getTarget(draggable, onLift) {
  var marginBox = draggable.page.marginBox;

  if (!didStartDisplaced(draggable.descriptor.id, onLift)) {
    return marginBox;
  }

  var expandBy = {
    top: onLift.displacedBy.point.y,
    right: onLift.displacedBy.point.x,
    bottom: 0,
    left: 0
  };
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["expand"])(marginBox, expandBy));
};

var getDisplacement = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var id = draggable.descriptor.id;
  var map = previousImpact.movement.map;
  var target = getTarget(draggable, onLift);
  var isVisible = isPartiallyVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    withDroppableDisplacement: true
  });
  var shouldAnimate = getShouldAnimate(forceShouldAnimate, isVisible, map[id]);
  var displacement = {
    draggableId: id,
    isVisible: isVisible,
    shouldAnimate: shouldAnimate
  };
  return displacement;
});

var getDisplacementMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (displaced) {
  return displaced.reduce(function (map, displacement) {
    map[displacement.draggableId] = displacement;
    return map;
  }, {});
});

var getDisplacedBy = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getReorderImpact = (function (_ref) {
  var currentCenter = _ref.pageBorderBoxCenterWithDroppableScrollChange,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestinationWithoutDraggable = _ref.insideDestinationWithoutDraggable,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      userDirection = _ref.userDirection,
      onLift = _ref.onLift;
  var axis = destination.axis;
  var isMovingForward = isUserMovingForward(destination.axis, userDirection);
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var targetCenter = currentCenter[axis.line];
  var displacement = displacedBy.value;
  var displaced = insideDestinationWithoutDraggable.filter(function (child) {
    var borderBox = child.page.borderBox;
    var start = borderBox[axis.start];
    var end = borderBox[axis.end];
    var didStartDisplaced$1 = didStartDisplaced(child.descriptor.id, onLift);

    if (isMovingForward) {
      if (didStartDisplaced$1) {
        return targetCenter < start;
      }

      return targetCenter < start + displacement;
    }

    if (didStartDisplaced$1) {
      return targetCenter <= end - displacement;
    }

    return targetCenter <= end;
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame,
      onLift: onLift
    });
  });
  var newIndex = insideDestinationWithoutDraggable.length - displaced.length;
  var movement = {
    displacedBy: displacedBy,
    displaced: displaced,
    map: getDisplacementMap(displaced)
  };
  var impact = {
    movement: movement,
    destination: {
      droppableId: destination.descriptor.id,
      index: newIndex
    },
    merge: null
  };
  return impact;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var noMovement = {
  displaced: [],
  map: {},
  displacedBy: noDisplacedBy
};
var noImpact = {
  movement: noMovement,
  destination: null,
  merge: null
};

var removeDraggableFromList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var getDragImpact = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      userDirection = _ref.userDirection,
      onLift = _ref.onLift;
  var destinationId = getDroppableOver({
    target: pageBorderBoxCenter,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var insideDestinationWithoutDraggable = removeDraggableFromList(draggable, insideDestination);
  var pageBorderBoxCenterWithDroppableScrollChange = withDroppableScroll(destination, pageBorderBoxCenter);
  var withMerge = getCombineImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    previousImpact: previousImpact,
    destination: destination,
    insideDestinationWithoutDraggable: insideDestinationWithoutDraggable,
    userDirection: userDirection,
    onLift: onLift
  });

  if (withMerge) {
    return withMerge;
  }

  return getReorderImpact({
    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
    destination: destination,
    draggable: draggable,
    insideDestinationWithoutDraggable: insideDestinationWithoutDraggable,
    previousImpact: previousImpact,
    viewport: viewport,
    userDirection: userDirection,
    onLift: onLift
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getHomeOnLift = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var originallyDisplaced = insideHome.slice(draggable.descriptor.index + 1);
  var wasDisplaced = originallyDisplaced.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var onLift = {
    displacedBy: displacedBy,
    wasDisplaced: wasDisplaced
  };
  var displaced = originallyDisplaced.map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: home,
      previousImpact: noImpact,
      viewport: viewport.frame,
      forceShouldAnimate: false,
      onLift: onLift
    });
  });
  var movement = {
    displaced: displaced,
    map: getDisplacementMap(displaced),
    displacedBy: displacedBy
  };
  var impact = {
    movement: movement,
    destination: getHomeLocation(draggable.descriptor),
    merge: null
  };
  return {
    impact: impact,
    onLift: onLift
  };
});

var getDragPositions = (function (_ref) {
  var oldInitial = _ref.initial,
      oldCurrent = _ref.current,
      oldClientBorderBoxCenter = _ref.oldClientBorderBoxCenter,
      newClientBorderBoxCenter = _ref.newClientBorderBoxCenter,
      viewport = _ref.viewport;
  var shift = subtract(newClientBorderBoxCenter, oldClientBorderBoxCenter);

  var initial = function () {
    var client = {
      selection: add(oldInitial.client.selection, shift),
      borderBoxCenter: newClientBorderBoxCenter,
      offset: origin
    };
    var page = {
      selection: add(client.selection, viewport.scroll.initial),
      borderBoxCenter: add(client.selection, viewport.scroll.initial)
    };
    return {
      client: client,
      page: page
    };
  }();

  var current = function () {
    var reverse = negate(shift);
    var offset = add(oldCurrent.client.offset, reverse);
    var client = {
      selection: add(initial.client.selection, offset),
      borderBoxCenter: add(initial.client.borderBoxCenter, offset),
      offset: offset
    };
    var page = {
      selection: add(client.selection, viewport.scroll.current),
      borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current)
    };
    !isEqual(oldCurrent.client.borderBoxCenter, client.borderBoxCenter) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n        Incorrect new client center position.\n        Expected (" + oldCurrent.client.borderBoxCenter.x + ", " + oldCurrent.client.borderBoxCenter.y + ")\n        to equal (" + client.borderBoxCenter.x + ", " + client.borderBoxCenter.y + ")\n      ") : undefined : void 0;
    return {
      client: client,
      page: page
    };
  }();

  return {
    current: current,
    initial: initial
  };
});

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(draggable.client, offset$1);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, initialWindowScroll);

  var moved = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, draggable, {
    placeholder: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var adjustExistingForAdditionsAndRemovals = (function (_ref) {
  var existing = _ref.existing,
      droppables = _ref.droppables,
      addedDraggables = _ref.additions,
      removedDraggables = _ref.removals,
      viewport = _ref.viewport;
  var shifted = {};
  toDroppableList(droppables).forEach(function (droppable) {
    var axis = droppable.axis;
    var original = getDraggablesInsideDroppable(droppable.descriptor.id, existing);
    var toShift = {};

    var addShift = function addShift(id, shift) {
      var previous = toShift[id];

      if (!previous) {
        toShift[id] = shift;
        return;
      }

      toShift[id] = {
        indexChange: previous.indexChange + shift.indexChange,
        offset: add(previous.offset, shift.offset)
      };
    };

    var removals = toDraggableMap(removedDraggables.map(function (id) {
      var item = existing[id];
      !item ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Could not find removed draggable \"" + id + "\"") : undefined : void 0;
      return item;
    }).filter(function (draggable) {
      return draggable.descriptor.droppableId === droppable.descriptor.id;
    }));
    var withRemovals = original.filter(function (item, index) {
      var isBeingRemoved = Boolean(removals[item.descriptor.id]);

      if (!isBeingRemoved) {
        return true;
      }

      var offset = negate(patch(axis.line, item.displaceBy[axis.line]));
      original.slice(index).forEach(function (sibling) {
        if (removals[sibling.descriptor.id]) {
          return;
        }

        addShift(sibling.descriptor.id, {
          indexChange: -1,
          offset: offset
        });
      });
      return false;
    });
    var additions = addedDraggables.filter(function (draggable) {
      return draggable.descriptor.droppableId === droppable.descriptor.id;
    });
    var withAdditions = withRemovals.slice(0);
    additions.forEach(function (item) {
      withAdditions.splice(item.descriptor.index, 0, item);
    });
    var additionMap = toDraggableMap(additions);
    withAdditions.forEach(function (item, index) {
      var wasAdded = Boolean(additionMap[item.descriptor.id]);

      if (!wasAdded) {
        return;
      }

      var offset = patch(axis.line, item.client.marginBox[axis.size]);
      withAdditions.slice(index).forEach(function (sibling) {
        if (additionMap[sibling.descriptor.id]) {
          return;
        }

        addShift(sibling.descriptor.id, {
          indexChange: 1,
          offset: offset
        });
      });
    });
    withAdditions.forEach(function (item) {
      if (additionMap[item.descriptor.id]) {
        return;
      }

      var shift = toShift[item.descriptor.id];

      if (!shift) {
        return;
      }

      var moved = offsetDraggable({
        draggable: item,
        offset: shift.offset,
        initialWindowScroll: viewport.scroll.initial
      });
      var index = item.descriptor.index + shift.indexChange;

      var updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, moved, {
        descriptor: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.descriptor, {
          index: index
        })
      });

      shifted[moved.descriptor.id] = updated;
    });
  });

  var map = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, shifted);

  return map;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = modified.frame;
    !frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var adjustAdditionsForCollapsedHome = (function (_ref) {
  var additions = _ref.additions,
      dragging = _ref.dragging,
      home = _ref.home,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, dragging.displaceBy);
  return additions.map(function (draggable) {
    if (draggable.descriptor.droppableId !== home.descriptor.id) {
      return draggable;
    }

    if (draggable.descriptor.index < dragging.descriptor.index) {
      return draggable;
    }

    return offsetDraggable({
      draggable: draggable,
      offset: displacedBy.point,
      initialWindowScroll: viewport.scroll.initial
    });
  });
});

var updateDraggables = (function (_ref) {
  var updatedDroppables = _ref.updatedDroppables,
      criticalId = _ref.criticalId,
      unmodifiedExisting = _ref.existing,
      unmodifiedAdditions = _ref.additions,
      removals = _ref.removals,
      viewport = _ref.viewport;
  var existing = adjustExistingForAdditionsAndRemovals({
    droppables: updatedDroppables,
    existing: unmodifiedExisting,
    additions: unmodifiedAdditions,
    removals: removals,
    viewport: viewport
  });
  var dragging = existing[criticalId];
  var home = updatedDroppables[dragging.descriptor.droppableId];
  var scrolledAdditions = adjustAdditionsForScrollChanges({
    additions: unmodifiedAdditions,
    updatedDroppables: updatedDroppables,
    viewport: viewport
  });
  var additions = adjustAdditionsForCollapsedHome({
    additions: scrolledAdditions,
    dragging: dragging,
    home: home,
    viewport: viewport
  });

  var map = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, toDraggableMap(additions));

  removals.forEach(function (id) {
    delete map[id];
  });
  return map;
});

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;
  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, frame, {
    scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not add placeholder space to home list') : undefined : void 0;
  !!droppable.subject.withPlaceholder ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add placeholder size to a subject when it already has one') : undefined : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot remove placeholder form subject when there was none') : undefined : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : undefined : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected Droppable to have a frame') : undefined : void 0;
  return frame;
});

var throwIfSpacingChange = function throwIfSpacingChange(old, fresh) {
  if (true) {
    var getMessage = function getMessage(spacingType) {
      return "Cannot change the " + spacingType + " of a Droppable during a drag";
    };

    !isEqual$1(old.margin, fresh.margin) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('margin')) : undefined : void 0;
    !isEqual$1(old.border, fresh.border) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('border')) : undefined : void 0;
    !isEqual$1(old.padding, fresh.padding) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, getMessage('padding')) : undefined : void 0;
  }
};

var adjustBorderBoxSize = function adjustBorderBoxSize(axis, old, fresh) {
  return {
    top: old.top,
    left: old.left,
    right: old.left + fresh.width,
    bottom: old.top + fresh.height
  };
};

var updateDroppables = (function (_ref) {
  var modified = _ref.modified,
      existing = _ref.existing,
      viewport = _ref.viewport;

  if (!modified.length) {
    return existing;
  }

  var adjusted = modified.map(function (provided) {
    var raw = existing[provided.descriptor.id];
    !raw ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not locate droppable in existing droppables') : undefined : void 0;
    var hasPlaceholder = Boolean(raw.subject.withPlaceholder);
    var dimension = hasPlaceholder ? removePlaceholder(raw) : raw;
    var oldClient = dimension.client;
    var newClient = provided.client;
    var oldScrollable = getFrame(dimension);
    var newScrollable = getFrame(provided);

    if (true) {
      throwIfSpacingChange(dimension.client, provided.client);
      throwIfSpacingChange(oldScrollable.frameClient, newScrollable.frameClient);
      var isFrameEqual = oldScrollable.frameClient.borderBox.height === newScrollable.frameClient.borderBox.height && oldScrollable.frameClient.borderBox.width === newScrollable.frameClient.borderBox.width;
      !isFrameEqual ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'The width and height of your Droppable scroll container cannot change when adding or removing Draggables during a drag') : undefined : void 0;
    }

    var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["createBox"])({
      borderBox: adjustBorderBoxSize(dimension.axis, oldClient.borderBox, newClient.borderBox),
      margin: oldClient.margin,
      border: oldClient.border,
      padding: oldClient.padding
    });
    var closest = {
      client: oldScrollable.frameClient,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(oldScrollable.frameClient, viewport.scroll.initial),
      shouldClipSubject: oldScrollable.shouldClipSubject,
      scrollSize: newScrollable.scrollSize,
      scroll: oldScrollable.scroll.initial
    };
    var withSizeChanged = getDroppableDimension({
      descriptor: provided.descriptor,
      isEnabled: provided.isEnabled,
      isCombineEnabled: provided.isCombineEnabled,
      isFixedOnPage: provided.isFixedOnPage,
      direction: provided.axis.direction,
      client: client,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, viewport.scroll.initial),
      closest: closest
    });
    var scrolled = scrollDroppable(withSizeChanged, newScrollable.scroll.current);
    return scrolled;
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, toDroppableMap(adjusted));

  return result;
});

var withNoAnimatedDisplacement = (function (impact) {
  var displaced = impact.movement.displaced;

  if (!displaced.length) {
    return impact;
  }

  var withoutAnimation = displaced.map(function (displacement) {
    if (!displacement.isVisible) {
      return displacement;
    }

    if (!displacement.shouldAnimate) {
      return displacement;
    }

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, displacement, {
      shouldAnimate: false
    });
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact, {
    movement: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact.movement, {
      displaced: withoutAnimation,
      map: getDisplacementMap(withoutAnimation)
    })
  });

  return result;
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var timingsKey = 'Processing dynamic changes';
var publishWhileDragging = (function (_ref) {
  var _extends2, _extends3;

  var state = _ref.state,
      published = _ref.published;
  start(timingsKey);
  var updatedDroppables = updateDroppables({
    modified: published.modified,
    existing: state.dimensions.droppables,
    viewport: state.viewport
  });
  var draggables = updateDraggables({
    updatedDroppables: updatedDroppables,
    criticalId: state.critical.draggable.id,
    existing: state.dimensions.draggables,
    additions: published.additions,
    removals: published.removals,
    viewport: state.viewport
  });
  var critical = {
    draggable: draggables[state.critical.draggable.id].descriptor,
    droppable: updatedDroppables[state.critical.droppable.id].descriptor
  };
  var original = state.dimensions.draggables[critical.draggable.id];
  var updated = draggables[critical.draggable.id];
  var droppables = recomputePlaceholders({
    draggable: updated,
    draggables: draggables,
    droppables: updatedDroppables,
    previousImpact: state.impact,
    impact: state.impact
  });
  var dimensions = {
    draggables: draggables,
    droppables: droppables
  };

  var _getDragPositions = getDragPositions({
    initial: state.initial,
    current: state.current,
    oldClientBorderBoxCenter: original.client.borderBox.center,
    newClientBorderBoxCenter: updated.client.borderBox.center,
    viewport: state.viewport
  }),
      initial = _getDragPositions.initial,
      current = _getDragPositions.current;

  var _getHomeOnLift = getHomeOnLift({
    draggable: updated,
    home: dimensions.droppables[critical.droppable.id],
    draggables: dimensions.draggables,
    viewport: state.viewport
  }),
      homeImpact = _getHomeOnLift.impact,
      onLift = _getHomeOnLift.onLift;

  var impact = withNoAnimatedDisplacement(getDragImpact({
    pageBorderBoxCenter: current.page.borderBoxCenter,
    draggable: updated,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: homeImpact,
    viewport: state.viewport,
    userDirection: state.userDirection,
    onLift: onLift
  }));
  var isOrphaned = Boolean(state.movementMode === 'SNAP' && !whatIsDraggedOver(impact));
  !!isOrphaned ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Dragging item no longer has a valid merge/destination after a dynamic update. This is not supported') : undefined : void 0;
  finish(timingsKey);

  var draggingState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    phase: 'DRAGGING'
  }, state, (_extends2 = {}, _extends2["phase"] = 'DRAGGING', _extends2.critical = critical, _extends2.current = current, _extends2.initial = initial, _extends2.impact = impact, _extends2.dimensions = dimensions, _extends2.onLift = onLift, _extends2.onLiftImpact = homeImpact, _extends2.forceShouldAnimate = false, _extends2));

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.reason = state.reason, _extends3.isWaiting = false, _extends3));

  return dropPending;
});

var forward = {
  vertical: 'down',
  horizontal: 'right'
};
var backward = {
  vertical: 'up',
  horizontal: 'left'
};

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      destination = _ref.destination,
      originalInsideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  if (previousImpact.merge) {
    return null;
  }

  var location = previousImpact.destination;
  !location ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Need a previous location to move from into a combine') : undefined : void 0;
  var currentIndex = location.index;

  var currentInsideDestination = function () {
    var shallow = originalInsideDestination.slice();

    if (isInHomeList) {
      shallow.splice(draggable.descriptor.index, 1);
    }

    shallow.splice(location.index, 0, draggable);
    return shallow;
  }();

  var targetIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (targetIndex < 0) {
    return null;
  }

  if (targetIndex > currentInsideDestination.length - 1) {
    return null;
  }

  var target = currentInsideDestination[targetIndex];
  !(target !== draggable) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot combine with self') : undefined : void 0;
  var merge = {
    whenEntered: isMovingForward ? forward : backward,
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };
  var impact = {
    movement: previousImpact.movement,
    destination: null,
    merge: merge
  };
  return impact;
});

var addClosest = function addClosest(add, displaced) {
  var added = {
    draggableId: add.descriptor.id,
    isVisible: true,
    shouldAnimate: true
  };
  return [added].concat(displaced);
};
var removeClosest = function removeClosest(displaced) {
  return displaced.slice(1);
};

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      initialInside = _ref.insideDestination,
      location = _ref.location;
  var insideDestination = initialInside.slice();
  var currentIndex = location.index;
  var isInForeignList = !isInHomeList;

  if (isInForeignList) {
    insideDestination.splice(location.index, 0, draggable);
  }

  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (proposedIndex < 0) {
    return null;
  }

  if (proposedIndex > insideDestination.length - 1) {
    return null;
  }

  return {
    proposedIndex: proposedIndex,
    modifyDisplacement: true
  };
});

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      draggables = _ref.draggables,
      merge = _ref.merge,
      onLift = _ref.onLift;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var movement = previousImpact.movement;
  var combineId = merge.combine.draggableId;
  var combine = draggables[combineId];
  var combineIndex = combine.descriptor.index;
  var wasDisplacedAtStart = didStartDisplaced(combineId, onLift);

  if (wasDisplacedAtStart) {
    var hasDisplacedFromStart = !movement.map[combineId];

    if (hasDisplacedFromStart) {
      if (isMovingForward) {
        return {
          proposedIndex: combineIndex,
          modifyDisplacement: false
        };
      }

      return {
        proposedIndex: combineIndex - 1,
        modifyDisplacement: true
      };
    }

    if (isMovingForward) {
      return {
        proposedIndex: combineIndex,
        modifyDisplacement: true
      };
    }

    return {
      proposedIndex: combineIndex - 1,
      modifyDisplacement: false
    };
  }

  var isDisplaced = Boolean(movement.map[combineId]);

  if (isDisplaced) {
    if (isMovingForward) {
      return {
        proposedIndex: combineIndex + 1,
        modifyDisplacement: true
      };
    }

    return {
      proposedIndex: combineIndex,
      modifyDisplacement: false
    };
  }

  if (isMovingForward) {
    return {
      proposedIndex: combineIndex + 1,
      modifyDisplacement: false
    };
  }

  return {
    proposedIndex: combineIndex,
    modifyDisplacement: true
  };
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      onLift = _ref.onLift;

  var instruction = function () {
    if (previousImpact.destination) {
      return fromReorder({
        isMovingForward: isMovingForward,
        isInHomeList: isInHomeList,
        draggable: draggable,
        location: previousImpact.destination,
        insideDestination: insideDestination
      });
    }

    if (previousImpact.merge) {
      return fromCombine({
        isMovingForward: isMovingForward,
        destination: destination,
        previousImpact: previousImpact,
        draggables: draggables,
        merge: previousImpact.merge,
        onLift: onLift
      });
    }
    return null;
  }();

  if (instruction == null) {
    return null;
  }

  var proposedIndex = instruction.proposedIndex,
      modifyDisplacement = instruction.modifyDisplacement;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);

  var displaced = function () {
    var lastDisplaced = previousImpact.movement.displaced;

    if (!modifyDisplacement) {
      return lastDisplaced;
    }

    if (isMovingForward) {
      return removeClosest(lastDisplaced);
    }

    var withoutDraggable = removeDraggableFromList(draggable, insideDestination);
    var atProposedIndex = withoutDraggable[proposedIndex];
    return addClosest(atProposedIndex, lastDisplaced);
  }();

  return {
    movement: {
      displacedBy: displacedBy,
      displaced: displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
});

var whenCombining = (function (_ref) {
  var combine = _ref.combine,
      onLift = _ref.onLift,
      movement = _ref.movement,
      draggables = _ref.draggables;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: movement.map,
    onLift: onLift,
    combineWith: combineWith,
    displacedBy: movement.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var movement = _ref.movement,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      onLift = _ref.onLift;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = movement.displaced,
      displacedBy = movement.displacedBy;

  if (displaced.length) {
    var closestAfter = draggables[displaced[0].draggableId];

    if (didStartDisplaced(closestAfter.descriptor.id, onLift)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closestAfter.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(closestAfter.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartDisplaced(last.descriptor.id, onLift)) {
    var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(last.page, negate(onLift.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      onLift = _ref.onLift;
  var merge = impact.merge;
  var destination = impact.destination;
  var original = draggable.page.borderBox.center;

  if (!droppable) {
    return original;
  }

  if (destination) {
    return whenReordering({
      movement: impact.movement,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      onLift: onLift
    });
  }

  if (merge) {
    return whenCombining({
      movement: impact.movement,
      combine: merge.combine,
      draggables: draggables,
      onLift: onLift
    });
  }

  return original;
};

var getPageBorderBoxCenter = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

var withNewDisplacement = (function (impact, displaced) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact, {
    movement: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, impact.movement, {
      displaced: displaced,
      map: getDisplacementMap(displaced)
    })
  });
});

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange,
      onLift = _ref.onLift;
  var displaced = impact.movement.displaced;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var updated = displaced.map(function (entry) {
    if (entry.isVisible) {
      return entry;
    }

    var draggable = draggables[entry.draggableId];
    var withScrolledViewport = getDisplacement({
      draggable: draggable,
      destination: destination,
      previousImpact: impact,
      viewport: scrolledViewport.frame,
      onLift: onLift,
      forceShouldAnimate: false
    });

    if (withScrolledViewport.isVisible) {
      return withScrolledViewport;
    }

    var withScrolledDroppable = getDisplacement({
      draggable: draggable,
      destination: scrolledDroppable,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift: onLift,
      forceShouldAnimate: false
    });

    if (withScrolledDroppable.isVisible) {
      return withScrolledDroppable;
    }

    return entry;
  });
  return withNewDisplacement(impact, updated);
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      onLift = _ref.onLift;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isInHomeList: isInHomeList,
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    onLift: onLift
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    onLift: onLift
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance,
    onLift: onLift
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get clipped area from droppable') : undefined : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, onLift) {
  var original = draggable.page.borderBox.center;
  return didStartDisplaced(draggable.descriptor.id, onLift) ? subtract(original, onLift.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, onLift) {
  var original = draggable.page.borderBox;
  return didStartDisplaced(draggable.descriptor.id, onLift) ? offsetByPosition(original, negate(onLift.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      onLift = _ref.onLift;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, onLift),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, onLift)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, onLift)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      movement: noMovement,
      destination: {
        droppableId: destination.descriptor.id,
        index: 0
      },
      merge: null
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenter({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      onLift: onLift
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] < moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var targetIndex = insideDestination.indexOf(moveRelativeTo);
  !(targetIndex !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find target in list') : undefined : void 0;

  var proposedIndex = function () {
    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return targetIndex;
    }

    if (isGoingBeforeTarget) {
      return targetIndex;
    }

    return targetIndex + 1;
  }();

  var displaced = removeDraggableFromList(draggable, insideDestination).slice(proposedIndex).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      viewport: viewport.frame,
      previousImpact: previousImpact,
      onLift: onLift
    });
  });
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var impact = {
    movement: {
      displacedBy: displacedBy,
      displaced: displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
  return impact;
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    onLift: onLift
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    onLift: onLift
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    onLift: onLift
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var getDroppableOver$1 = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    onLift: state.onLift
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    previousImpact: state.impact,
    viewport: state.viewport,
    onLift: state.onLift
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

var getVertical = function getVertical(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'down' : 'up';
};

var getHorizontal = function getHorizontal(previous, diff) {
  if (diff === 0) {
    return previous;
  }

  return diff > 0 ? 'right' : 'left';
};

var getUserDirection = (function (previous, oldPageBorderBoxCenter, newPageBorderBoxCenter) {
  var diff = subtract(newPageBorderBoxCenter, oldPageBorderBoxCenter);
  return {
    horizontal: getHorizontal(previous.horizontal, diff.x),
    vertical: getVertical(previous.vertical, diff.y)
  };
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var currentWindowScroll = viewport.scroll.current;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, currentWindowScroll),
    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
  };
  var current = {
    client: client,
    page: page
  };
  var userDirection = getUserDirection(state.userDirection, state.current.page.borderBoxCenter, current.page.borderBoxCenter);

  if (state.phase === 'COLLECTING') {
    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current,
      userDirection: userDirection
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    userDirection: userDirection,
    onLift: state.onLift
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    current: current,
    userDirection: userDirection,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

var recomputeDisplacementVisibility = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      onLift = _ref.onLift,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var updated = impact.movement.displaced.map(function (entry) {
    return getDisplacement({
      draggable: draggables[entry.draggableId],
      destination: destination,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift: onLift,
      forceShouldAnimate: forceShouldAnimate
    });
  });
  return withNewDisplacement(impact, updated);
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var pageBorderBoxCenter = getPageBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    onLift: onLift
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Must be over a destination in SNAP movement mode') : undefined : void 0;
  var destination = droppables[isOver];
  var impact = recomputeDisplacementVisibility({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    onLift: state.onLift
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    onLift: state.onLift
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'CLEAN') {
    return idle;
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'INITIAL_PUBLISH must come after a IDLE phase') : undefined : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getHomeOnLift = getHomeOnLift({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getHomeOnLift.impact,
        onLift = _getHomeOnLift.onLift;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      onLift: onLift,
      onLiftImpact: impact,
      viewport: viewport,
      userDirection: forward,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    var _extends2;

    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Collection cannot start from phase " + state.phase) : undefined : void 0;

    var _result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, (_extends2 = {}, _extends2["phase"] = 'COLLECTING', _extends2));

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Unexpected " + action.type + " received in phase " + state.phase) : undefined : void 0;
    return publishWhileDragging({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    if (state.phase === 'COLLECTING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        offset = _action$payload2.offset;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, offset);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : undefined : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : undefined : void 0;

    var updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : undefined : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : undefined : void 0;

    var _updated = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot move by window in phase " + state.phase) : undefined : void 0;
    !state.isWindowScrollAllowed ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Window scrolling is currently not supported for fixed lists. Aborting drag') : undefined : void 0;
    var newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, newScroll)) {
      return state;
    }

    var _viewport = scrollViewport(state.viewport, newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.viewport, {
      scroll: Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, action.type + " received while not in DRAGGING phase") : undefined : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var _extends3;

    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : undefined : void 0;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DROP_PENDING'
    }, state, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.isWaiting = true, _extends3.reason = reason, _extends3));

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot animate drop from phase " + state.phase) : undefined : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      dimensions: state.dimensions,
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _action$payload6 = action.payload,
        _completed = _action$payload6.completed,
        shouldFlush = _action$payload6.shouldFlush;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: shouldFlush
    };
  }

  return state;
});

var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging$1 = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var clean = function clean() {
  return {
    type: 'CLEAN',
    payload: null
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

var lift$1 = (function (getMarshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var marshal = getMarshal();
        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed,
            shouldFlush: true
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Incorrect phase to start a drag') : undefined : void 0;
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      onLift = _ref.onLift;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    onLift: onLift,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  var merge = impact.merge;

  if (merge && didStartDisplaced(merge.combine.draggableId, onLift)) {
    return subtract(offset, onLift.displacedBy.point);
  }

  return offset;
});

var getDropImpact = (function (_ref) {
  var reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      onLiftImpact = _ref.onLiftImpact,
      onLift = _ref.onLift;
  var didDropInsideDroppable = reason === 'DROP' && Boolean(whatIsDraggedOver(lastImpact));

  if (!didDropInsideDroppable) {
    var impact = recomputeDisplacementVisibility({
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      draggables: draggables,
      onLift: onLift,
      forceShouldAnimate: true
    });
    return {
      impact: impact,
      didDropInsideDroppable: didDropInsideDroppable
    };
  }

  if (lastImpact.destination) {
    return {
      impact: lastImpact,
      didDropInsideDroppable: didDropInsideDroppable
    };
  }

  var withoutMovement = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastImpact, {
    movement: noMovement
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: didDropInsideDroppable
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A DROP action occurred while DROP_PENDING and still waiting') : undefined : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot drop in phase: " + state.phase) : undefined : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        onLift: state.onLift,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var draggable = dimensions.draggables[state.critical.draggable.id];
      var destination = didDropInsideDroppable ? impact.destination : null;
      var combine = didDropInsideDroppable && impact.merge ? impact.merge.combine : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        onLift: state.onLift
      });
      var completed = {
        critical: state.critical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed,
          shouldFlush: false
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean$1 = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean$1("\n  %creact-beautiful-dnd\n\n  %c" + clean$1(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
var warning = function warning(message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console).warn.apply(_console, getFormattedMessage(message));
};

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : undefined;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : undefined;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find timer') : undefined : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start(key);
  fn();
  finish(key);
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = impact.destination;
    var combine = impact.merge ? impact.merge.combine : null;
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onDragMove when onDragStart has not been called') : undefined : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only flush responders while dragging') : undefined : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : undefined : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'CLEAN') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot finish a drop animating when no drop is occurring') : undefined : void 0;
      store.dispatch(completeDrop({
        completed: state.completed,
        shouldFlush: false
      }));
    };
  };
});

var dimensionMarshalStopper = (function (getMarshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
          var marshal = getMarshal();
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'CLEAN';
};

var shouldCancelPending = function shouldCancelPending(action) {
  return action.type === 'COLLECTION_STARTING';
};

var autoScroll = (function (getScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldEnd(action)) {
          getScroller().stop();
          next(action);
          return;
        }

        if (shouldCancelPending(action)) {
          getScroller().cancelPending();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : undefined : void 0;
          getScroller().start(state);
          return;
        }

        next(action);
        getScroller().scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
var createStore = (function (_ref) {
  var getDimensionMarshal = _ref.getDimensionMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      getScroller = _ref.getScroller;
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(reducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(getDimensionMarshal), lift$1(getDimensionMarshal), drop$1, dropAnimationFinish, pendingDrop, autoScroll(getScroller), responders(getResponders, announce))));
});

var clean$2 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};

var timingKey = 'Publish collection from DOM';
var createPublisher = (function (_ref) {
  var getEntries = _ref.getEntries,
      callbacks = _ref.callbacks;

  var advancedUsageWarning = function () {
    if (false) {}

    var hasAnnounced = false;
    return function () {
      if (hasAnnounced) {
        return;
      }

      hasAnnounced = true;
       true ? warning("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature.\n\n        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/changes-while-dragging.md\n      ") : undefined;
    };
  }();

  var staging = clean$2();
  var frameId = null;

  var collect = function collect() {
    advancedUsageWarning();

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      callbacks.collectionStarting();
      var critical = callbacks.getCritical();
      start(timingKey);
      var entries = getEntries();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;

      var added = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(additions).map(function (id) {
        return entries.draggables[id].getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });

      var updated = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(modified).map(function (id) {
        var entry = entries.droppables[id];
        !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find dynamically added droppable in cache') : undefined : void 0;
        var isHome = entry.descriptor.id === critical.droppable.id;
        var options = {
          withoutPlaceholder: !isHome
        };
        return entry.callbacks.recollect(options);
      });

      var result = {
        additions: added,
        removals: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(removals),
        modified: updated
      };
      staging = clean$2();
      finish(timingKey);
      callbacks.publish(result);
    });
  };

  var add = function add(descriptor) {
    staging.additions[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;

    if (staging.removals[descriptor.id]) {
      delete staging.removals[descriptor.id];
    }

    collect();
  };

  var remove = function remove(descriptor) {
    staging.removals[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$2();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find document.documentElement') : undefined : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      entries = _ref.entries;
  var timingKey = 'Initial collection from DOM';
  start(timingKey);
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = values(entries.droppables).filter(function (entry) {
    return entry.descriptor.type === home.type;
  }).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = values(entries.draggables).filter(function (entry) {
    return entry.descriptor.type === critical.draggable.type;
  }).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish(timingKey);
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

var throwIfAddOrRemoveOfWrongType = function throwIfAddOrRemoveOfWrongType(collection, descriptor) {
  !(collection.critical.draggable.type === descriptor.type) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "We have detected that you have added a Draggable during a drag.\n      This is not of the same type as the dragging item\n\n      Dragging type: " + collection.critical.draggable.type + ".\n      Added type: " + descriptor.type + "\n\n      We are not allowing this as you can run into problems if your change\n      has shifted the positioning of other Droppables, or has changed the size of the page") : undefined : void 0;
};

var createDimensionMarshal = (function (callbacks) {
  var entries = {
    droppables: {},
    draggables: {}
  };
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting,
      getCritical: function getCritical() {
        !collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get critical when there is no collection') : undefined : void 0;
        return collection.critical;
      }
    },
    getEntries: function getEntries() {
      return entries;
    }
  });

  var registerDraggable = function registerDraggable(descriptor, getDimension) {
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;

    if (!collection) {
      return;
    }

    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.add(descriptor);
  };

  var updateDraggable = function updateDraggable(previous, descriptor, getDimension) {
    !entries.draggables[previous.id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot update draggable registration as no previous registration was found') : undefined : void 0;
    delete entries.draggables[previous.id];
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;
  };

  var unregisterDraggable = function unregisterDraggable(descriptor) {
    var entry = entries.draggables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot unregister Draggable with id:\n      " + descriptor.id + " as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.draggables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.draggable.id !== descriptor.id) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot remove the dragging item during a drag') : undefined : void 0;
    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.remove(descriptor);
  };

  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
    var id = descriptor.id;
    entries.droppables[id] = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add a Droppable during a drag') : undefined : void 0;
  };

  var updateDroppable = function updateDroppable(previous, descriptor, droppableCallbacks) {
    !entries.droppables[previous.id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot update droppable registration as no previous registration was found') : undefined : void 0;
    delete entries.droppables[previous.id];
    var entry = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };
    entries.droppables[descriptor.id] = entry;
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'You are not able to update the id or type of a droppable during a drag') : undefined : void 0;
  };

  var unregisterDroppable = function unregisterDroppable(descriptor) {
    var entry = entries.droppables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.droppables[descriptor.id];
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot add a Droppable during a drag') : undefined : void 0;
  };

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableScroll({
      id: id,
      offset: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    var entry = entries.droppables[id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Cannot scroll Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    entry.callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    values(entries.droppables).filter(function (entry) {
      return entry.descriptor.type === home.type;
    }).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection = null;
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start capturing critical dimensions as there is already a collection') : undefined : void 0;
    var entry = entries.draggables[request.draggableId];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find critical draggable entry') : undefined : void 0;
    var home = entries.droppables[entry.descriptor.droppableId];
    !home ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find critical droppable entry') : undefined : void 0;
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    collection = {
      critical: critical
    };
    return getInitialPublish({
      critical: critical,
      entries: entries,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    registerDraggable: registerDraggable,
    updateDraggable: updateDraggable,
    unregisterDraggable: unregisterDraggable,
    registerDroppable: registerDroppable,
    updateDroppable: updateDroppable,
    unregisterDroppable: unregisterDroppable,
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var prefix = 'data-react-beautiful-dnd';
var dragHandle = prefix + "-drag-handle";
var draggable = prefix + "-draggable";
var droppable = prefix + "-droppable";

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (styleContext) {
  var getSelector = makeGetSelector(styleContext);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var count = 0;
var resetStyleContext = function resetStyleContext() {
  count = 0;
};

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find the head to append a style to') : undefined : void 0;
  return head;
};

var createStyleEl = function createStyleEl() {
  var el = document.createElement('style');
  el.type = 'text/css';
  return el;
};

var createStyleMarshal = (function () {
  var context = "" + count++;
  var styles = getStyles$1(context);
  var always = null;
  var dynamic = null;
  var setStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (el, proposed) {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot set style of style tag if not mounted') : undefined : void 0;
    el.innerHTML = proposed;
  });

  var mount = function mount() {
    !(!always && !dynamic) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Style marshal already mounted') : undefined : void 0;
    always = createStyleEl();
    dynamic = createStyleEl();
    always.setAttribute(prefix + "-always", context);
    dynamic.setAttribute(prefix + "-dynamic", context);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setStyle(always, styles.always);
    setStyle(dynamic, styles.resting);
  };

  var dragging = function dragging() {
    return setStyle(dynamic, styles.dragging);
  };

  var dropping = function dropping(reason) {
    if (reason === 'DROP') {
      setStyle(dynamic, styles.dropAnimating);
      return;
    }

    setStyle(dynamic, styles.userCancel);
  };

  var resting = function resting() {
    return setStyle(dynamic, styles.resting);
  };

  var unmount = function unmount() {
    !(always && dynamic) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot unmount style marshal as it is already unmounted') : undefined : void 0;
    getHead().removeChild(always);
    getHead().removeChild(dynamic);
    always = null;
    dynamic = null;
  };

  var marshal = {
    dragging: dragging,
    dropping: dropping,
    resting: resting,
    styleContext: context,
    mount: mount,
    unmount: unmount
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot find document.body') : undefined : void 0;
  return body;
});

var count$1 = 0;
var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};
var createAnnouncer = (function () {
  var id = "react-beautiful-dnd-announcement-" + count$1++;
  var el = null;

  var announce = function announce(message) {
    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : undefined;
  };

  var mount = function mount() {
    !!el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Announcer already mounted') : undefined : void 0;
    el = document.createElement('div');
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('role', 'log');
    el.setAttribute('aria-atomic', 'true');

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_10___default()(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
  };

  var unmount = function unmount() {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Will not unmount announcer as it is already unmounted') : undefined : void 0;
    getBodyElement().removeChild(el);
    el = null;
  };

  var announcer = {
    announce: announce,
    id: id,
    mount: mount,
    unmount: unmount
  };
  return announcer;
});

var getScrollableDroppables = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Invalid result') : undefined : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : undefined;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;

  var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$3 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$3({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(scrollWindow);
  var scheduleDroppableScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot fluid scroll if not dragging') : undefined : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var cancelPending = function cancelPending() {
    !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot cancel pending fluid scroll when not started') : undefined : void 0;
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
  };

  var start$1 = function start$1(state) {
    start('starting fluid scroller');
    !!dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start auto scrolling when already started') : undefined : void 0;

    var dragStartTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_11___default()();

    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish('starting fluid scroller');

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    cancelPending();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    cancelPending: cancelPending,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot perform a jump scroll when there is no destination') : undefined : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    cancelPending: fluidScroller.cancelPending,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = function prefix(key) {
  return "private-react-beautiful-dnd-key-do-not-use-" + key;
};

var storeKey = prefix$1('store');
var droppableIdKey = prefix$1('droppable-id');
var droppableTypeKey = prefix$1('droppable-type');
var dimensionMarshalKey = prefix$1('dimension-marshal');
var styleKey = prefix$1('style');
var canLiftKey = prefix$1('can-lift');
var isMovementAllowedKey = prefix$1('is-movement-allowed');

var peerDependencies = {
	react: "^16.3.1"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "Unable to parse React version " + value) : undefined : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : undefined;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : undefined;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : undefined;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : undefined;
  }
});

var _DragDropContext$chil;
var resetServerContext = function resetServerContext() {
  resetStyleContext();
};

var printFatalDevError = function printFatalDevError(error) {
  var _console;

  if (false) {}

  (_console = console).error.apply(_console, getFormattedMessage("\n      An error has occurred while a drag is occurring.\n      Any existing drag will be cancelled.\n\n      > " + error.message + "\n      "));

  console.error('raw', error);
};

var DragDropContext = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DragDropContext, _React$Component);

  function DragDropContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.store = void 0;
    _this.dimensionMarshal = void 0;
    _this.styleMarshal = void 0;
    _this.autoScroller = void 0;
    _this.announcer = void 0;
    _this.unsubscribe = void 0;

    _this.canLift = function (id) {
      return canStartDrag(_this.store.getState(), id);
    };

    _this.getIsMovementAllowed = function () {
      return isMovementAllowed(_this.store.getState());
    };

    _this.onFatalError = function (error) {
      printFatalDevError(error);

      var state = _this.store.getState();

      if (state.phase !== 'IDLE') {
        _this.store.dispatch(clean());
      }
    };

    _this.onWindowError = function (error) {
      return _this.onFatalError(error);
    };

    if (true) {
      !(typeof props.onDragEnd === 'function') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A DragDropContext requires an onDragEnd function to perform reordering logic') : undefined : void 0;
    }

    _this.announcer = createAnnouncer();
    _this.styleMarshal = createStyleMarshal();
    _this.store = createStore({
      getDimensionMarshal: function getDimensionMarshal() {
        return _this.dimensionMarshal;
      },
      styleMarshal: _this.styleMarshal,
      getResponders: function getResponders() {
        return {
          onBeforeDragStart: _this.props.onBeforeDragStart,
          onDragStart: _this.props.onDragStart,
          onDragEnd: _this.props.onDragEnd,
          onDragUpdate: _this.props.onDragUpdate
        };
      },
      announce: _this.announcer.announce,
      getScroller: function getScroller() {
        return _this.autoScroller;
      }
    });
    var callbacks = Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
      publishWhileDragging: publishWhileDragging$1,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, _this.store.dispatch);
    _this.dimensionMarshal = createDimensionMarshal(callbacks);
    _this.autoScroller = createAutoScroller(Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: _this.dimensionMarshal.scrollDroppable
    }, Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
      move: move
    }, _this.store.dispatch)));
    return _this;
  }

  var _proto = DragDropContext.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[storeKey] = this.store, _ref[dimensionMarshalKey] = this.dimensionMarshal, _ref[styleKey] = this.styleMarshal.styleContext, _ref[canLiftKey] = this.canLift, _ref[isMovementAllowedKey] = this.getIsMovementAllowed, _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('error', this.onWindowError);
    this.styleMarshal.mount();
    this.announcer.mount();

    if (true) {
      checkReactVersion(peerDependencies.react, react__WEBPACK_IMPORTED_MODULE_2___default.a.version);
      checkDoctype(document);
    }
  };

  _proto.componentDidCatch = function componentDidCatch(error) {
    this.onFatalError(error);

    if (error.message.indexOf('Invariant failed') !== -1) {
      this.setState({});
      return;
    }

    throw error;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('error', this.onWindowError);
    var state = this.store.getState();

    if (state.phase !== 'IDLE') {
      this.store.dispatch(clean());
    }

    this.styleMarshal.unmount();
    this.announcer.unmount();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DragDropContext;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

DragDropContext.childContextTypes = (_DragDropContext$chil = {}, _DragDropContext$chil[storeKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  getState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
}).isRequired, _DragDropContext$chil[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired, _DragDropContext$chil[styleKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _DragDropContext$chil[canLiftKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired, _DragDropContext$chil[isMovementAllowedKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired, _DragDropContext$chil);

var isEqual$2 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$2('scroll');
var isAuto = isEqual$2('auto');
var isVisible$1 = isEqual$2('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : undefined;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : undefined;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getBox"])(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["expand"])(paddingBox, base.border);
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["createBox"])({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getBox"])(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

var _DroppableDimensionPu;

var getClosestScrollable$1 = function getClosestScrollable(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};

var getListenerOptions = function getListenerOptions(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};

var withoutPlaceholder = function withoutPlaceholder(placeholder, fn) {
  if (!placeholder) {
    return fn();
  }

  var last = placeholder.style.display;
  placeholder.style.display = 'none';
  var result = fn();
  placeholder.style.display = last;
  return result;
};

var DroppableDimensionPublisher = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DroppableDimensionPublisher, _React$Component);

  function DroppableDimensionPublisher(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.dragging = void 0;
    _this.callbacks = void 0;
    _this.publishedDescriptor = null;

    _this.getClosestScroll = function () {
      var dragging = _this.dragging;

      if (!dragging || !dragging.env.closestScrollable) {
        return origin;
      }

      return getScroll$1(dragging.env.closestScrollable);
    };

    _this.memoizedUpdateScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot update scroll on unpublished droppable') : undefined : void 0;
      var newScroll = {
        x: x,
        y: y
      };
      var marshal = _this.context[dimensionMarshalKey];
      marshal.updateDroppableScroll(_this.publishedDescriptor.id, newScroll);
    });

    _this.updateScroll = function () {
      var scroll = _this.getClosestScroll();

      _this.memoizedUpdateScroll(scroll.x, scroll.y);
    };

    _this.scheduleScrollUpdate = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.updateScroll);

    _this.onClosestScroll = function () {
      var dragging = _this.dragging;
      var closest = getClosestScrollable$1(_this.dragging);
      !(dragging && closest) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Could not find scroll options while scrolling') : undefined : void 0;
      var options = dragging.scrollOptions;

      if (options.shouldPublishImmediately) {
        _this.updateScroll();

        return;
      }

      _this.scheduleScrollUpdate();
    };

    _this.scroll = function (change) {
      var closest = getClosestScrollable$1(_this.dragging);
      !closest ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot scroll a droppable with no closest scrollable') : undefined : void 0;
      closest.scrollTop += change.y;
      closest.scrollLeft += change.x;
    };

    _this.dragStopped = function () {
      var dragging = _this.dragging;
      !dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot stop drag when no active drag') : undefined : void 0;
      var closest = getClosestScrollable$1(dragging);
      _this.dragging = null;

      if (!closest) {
        return;
      }

      _this.scheduleScrollUpdate.cancel();

      closest.removeEventListener('scroll', _this.onClosestScroll, getListenerOptions(dragging.scrollOptions));
    };

    _this.getMemoizedDescriptor = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (id, type) {
      return {
        id: id,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDroppable(descriptor, _this.callbacks);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (_this.publishedDescriptor === descriptor) {
        return;
      }

      marshal.updateDroppable(_this.publishedDescriptor, descriptor, _this.callbacks);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot unpublish descriptor when none is published') : undefined : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDroppable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.recollect = function (options) {
      var dragging = _this.dragging;
      var closest = getClosestScrollable$1(dragging);
      !(dragging && closest) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : undefined : void 0;

      var execute = function execute() {
        return getDimension({
          ref: dragging.ref,
          descriptor: dragging.descriptor,
          env: dragging.env,
          windowScroll: origin,
          direction: _this.props.direction,
          isDropDisabled: _this.props.isDropDisabled,
          isCombineEnabled: _this.props.isCombineEnabled,
          shouldClipSubject: !_this.props.ignoreContainerClipping
        });
      };

      if (!options.withoutPlaceholder) {
        return execute();
      }

      return withoutPlaceholder(_this.props.getPlaceholderRef(), execute);
    };

    _this.getDimensionAndWatchScroll = function (windowScroll, options) {
      !!_this.dragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot collect a droppable while a drag is occurring') : undefined : void 0;
      var descriptor = _this.publishedDescriptor;
      !descriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get dimension for unpublished droppable') : undefined : void 0;

      var ref = _this.props.getDroppableRef();

      !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot collect without a droppable ref') : undefined : void 0;
      var env = getEnv(ref);
      var dragging = {
        ref: ref,
        descriptor: descriptor,
        env: env,
        scrollOptions: options
      };
      _this.dragging = dragging;
      var dimension = getDimension({
        ref: ref,
        descriptor: descriptor,
        env: env,
        windowScroll: windowScroll,
        direction: _this.props.direction,
        isDropDisabled: _this.props.isDropDisabled,
        isCombineEnabled: _this.props.isCombineEnabled,
        shouldClipSubject: !_this.props.ignoreContainerClipping
      });

      if (env.closestScrollable) {
        env.closestScrollable.addEventListener('scroll', _this.onClosestScroll, getListenerOptions(dragging.scrollOptions));

        if (true) {
          checkForNestedScrollContainers(env.closestScrollable);
        }
      }

      return dimension;
    };

    var callbacks = {
      getDimensionAndWatchScroll: _this.getDimensionAndWatchScroll,
      recollect: _this.recollect,
      dragStopped: _this.dragStopped,
      scroll: _this.scroll
    };
    _this.callbacks = callbacks;
    return _this;
  }

  var _proto = DroppableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.publish();

    if (!this.dragging) {
      return;
    }

    var isDisabledChanged = this.props.isDropDisabled !== prevProps.isDropDisabled;
    var isCombineChanged = this.props.isCombineEnabled !== prevProps.isCombineEnabled;

    if (!isDisabledChanged && !isCombineChanged) {
      return;
    }

    var marshal = this.context[dimensionMarshalKey];

    if (isDisabledChanged) {
      marshal.updateDroppableIsEnabled(this.props.droppableId, !this.props.isDropDisabled);
    }

    if (isCombineChanged) {
      marshal.updateDroppableIsCombineEnabled(this.props.droppableId, this.props.isCombineEnabled);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.dragging) {
       true ? warning('unmounting droppable while a drag is occurring') : undefined;
      this.dragStopped();
    }

    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DroppableDimensionPublisher;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

DroppableDimensionPublisher.contextTypes = (_DroppableDimensionPu = {}, _DroppableDimensionPu[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired, _DroppableDimensionPu);

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var Placeholder = function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Placeholder, _PureComponent);

  function Placeholder() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.mountTimerId = null;
    _this.state = {
      isAnimatingOpenOnMount: _this.props.animate === 'open'
    };

    _this.onTransitionEnd = function (event) {
      if (event.propertyName !== 'height') {
        return;
      }

      _this.props.onTransitionEnd();

      if (_this.props.animate === 'close') {
        _this.props.onClose();
      }
    };

    return _this;
  }

  Placeholder.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.isAnimatingOpenOnMount && props.animate !== 'open') {
      return {
        isAnimatingOpenOnMount: false
      };
    }

    return state;
  };

  var _proto = Placeholder.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!this.state.isAnimatingOpenOnMount) {
      return;
    }

    this.mountTimerId = setTimeout(function () {
      _this2.mountTimerId = null;

      if (_this2.state.isAnimatingOpenOnMount) {
        _this2.setState({
          isAnimatingOpenOnMount: false
        });
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.mountTimerId) {
      return;
    }

    clearTimeout(this.mountTimerId);
    this.mountTimerId = null;
  };

  _proto.getSize = function getSize() {
    if (this.state.isAnimatingOpenOnMount) {
      return empty;
    }

    if (this.props.animate === 'close') {
      return empty;
    }

    var placeholder = this.props.placeholder;
    return {
      height: placeholder.client.borderBox.height,
      width: placeholder.client.borderBox.width,
      margin: placeholder.client.margin
    };
  };

  _proto.render = function render() {
    var placeholder = this.props.placeholder;
    var size = this.getSize();
    var display = placeholder.display,
        tagName = placeholder.tagName;
    var style = {
      display: display,
      boxSizing: 'border-box',
      width: size.width,
      height: size.height,
      marginTop: size.margin.top,
      marginRight: size.margin.right,
      marginBottom: size.margin.bottom,
      marginLeft: size.margin.left,
      flexShrink: '0',
      flexGrow: '0',
      pointerEvents: 'none',
      transition: transitions.placeholder
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(tagName, {
      style: style,
      onTransitionEnd: this.onTransitionEnd,
      ref: this.props.innerRef
    });
  };

  return Placeholder;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

var throwIfRefIsInvalid = (function (ref) {
  !(ref && isHtmlElement(ref)) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : undefined : void 0;
});

var checkOwnProps = (function (props) {
  !props.droppableId ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A Droppable requires a droppableId prop') : undefined : void 0;
  !(typeof props.isDropDisabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isDropDisabled must be a boolean') : undefined : void 0;
  !(typeof props.isCombineEnabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isCombineEnabled must be a boolean') : undefined : void 0;
  !(typeof props.ignoreContainerClipping === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'ignoreContainerClipping must be a boolean') : undefined : void 0;
});

var AnimateInOut = function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent);

var _Droppable$contextTyp, _Droppable$childConte;

var Droppable = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Droppable, _React$Component);

  function Droppable(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.styleContext = void 0;
    _this.ref = null;
    _this.placeholderRef = null;

    _this.setPlaceholderRef = function (ref) {
      _this.placeholderRef = ref;
    };

    _this.getPlaceholderRef = function () {
      return _this.placeholderRef;
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDroppableRef = function () {
      return _this.ref;
    };

    _this.onPlaceholderTransitionEnd = function () {
      var isMovementAllowed = _this.context[isMovementAllowedKey]();

      if (isMovementAllowed) {
        _this.props.updateViewportMaxScroll({
          maxScroll: getMaxWindowScroll()
        });
      }
    };

    _this.styleContext = context[styleKey];

    if (true) {
      checkOwnProps(props);
    }

    return _this;
  }

  var _proto = Droppable.prototype;

  _proto.getChildContext = function getChildContext() {
    var _value;

    var value = (_value = {}, _value[droppableIdKey] = this.props.droppableId, _value[droppableTypeKey] = this.props.type, _value);
    return value;
  };

  _proto.componentDidMount = function componentDidMount() {
    throwIfRefIsInvalid(this.ref);
    this.warnIfPlaceholderNotMounted();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.warnIfPlaceholderNotMounted();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.ref = null;
    this.placeholderRef = null;
  };

  _proto.warnIfPlaceholderNotMounted = function warnIfPlaceholderNotMounted() {
    if (false) {}

    if (!this.props.placeholder) {
      return;
    }

    if (this.placeholderRef) {
      return;
    }

     true ? warning("\n      Droppable setup issue [droppableId: \"" + this.props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : undefined;
  };

  _proto.getPlaceholder = function getPlaceholder() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnimateInOut, {
      on: this.props.placeholder,
      shouldAnimate: this.props.shouldAnimatePlaceholder
    }, function (_ref) {
      var onClose = _ref.onClose,
          data = _ref.data,
          animate = _ref.animate;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Placeholder, {
        placeholder: data,
        onClose: onClose,
        innerRef: _this2.setPlaceholderRef,
        animate: animate,
        onTransitionEnd: _this2.onPlaceholderTransitionEnd
      });
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        direction = _this$props.direction,
        type = _this$props.type,
        droppableId = _this$props.droppableId,
        isDropDisabled = _this$props.isDropDisabled,
        isCombineEnabled = _this$props.isCombineEnabled,
        ignoreContainerClipping = _this$props.ignoreContainerClipping,
        isDraggingOver = _this$props.isDraggingOver,
        draggingOverWith = _this$props.draggingOverWith,
        draggingFromThisWith = _this$props.draggingFromThisWith;
    var provided = {
      innerRef: this.setRef,
      placeholder: this.getPlaceholder(),
      droppableProps: {
        'data-react-beautiful-dnd-droppable': this.styleContext
      }
    };
    var snapshot = {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith,
      draggingFromThisWith: draggingFromThisWith
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DroppableDimensionPublisher, {
      droppableId: droppableId,
      type: type,
      direction: direction,
      ignoreContainerClipping: ignoreContainerClipping,
      isDropDisabled: isDropDisabled,
      isCombineEnabled: isCombineEnabled,
      getDroppableRef: this.getDroppableRef,
      getPlaceholderRef: this.getPlaceholderRef
    }, children(provided, snapshot));
  };

  return Droppable;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Droppable.contextTypes = (_Droppable$contextTyp = {}, _Droppable$contextTyp[styleKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Droppable$contextTyp[isMovementAllowedKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired, _Droppable$contextTyp);
Droppable.childContextTypes = (_Droppable$childConte = {}, _Droppable$childConte[droppableIdKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Droppable$childConte[droppableTypeKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Droppable$childConte);

var isStrictEqual = (function (a, b) {
  return a === b;
});

var idle$1 = {
  isDraggingOver: false,
  draggingOverWith: null,
  draggingFromThisWith: null,
  placeholder: null,
  shouldAnimatePlaceholder: true
};

var idleWithoutAnimation = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, idle$1, {
  shouldAnimatePlaceholder: false
});

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps = function makeMapStateToProps() {
  var getDraggingOverMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggingOverWith, draggingFromThisWith, placeholder, shouldAnimatePlaceholder) {
    return {
      isDraggingOver: true,
      draggingFromThisWith: draggingFromThisWith,
      draggingOverWith: draggingOverWith,
      placeholder: placeholder,
      shouldAnimatePlaceholder: shouldAnimatePlaceholder
    };
  });
  var getHomeNotDraggedOverMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (draggingFromThisWith, placeholder) {
    return {
      isDraggingOver: false,
      draggingFromThisWith: draggingFromThisWith,
      draggingOverWith: null,
      placeholder: placeholder,
      shouldAnimatePlaceholder: false
    };
  });

  var getMapProps = function getMapProps(id, draggable, impact) {
    var isOver = whatIsDraggedOver(impact) === id;
    var isHome = draggable.descriptor.droppableId === id;

    if (isOver) {
      var draggingFromThisWith = isHome ? draggable.descriptor.id : null;
      var shouldAnimatePlaceholder = !isHome;
      return getDraggingOverMapProps(draggable.descriptor.id, draggingFromThisWith, draggable.placeholder, shouldAnimatePlaceholder);
    }

    if (!isHome) {
      return idle$1;
    }

    return getHomeNotDraggedOverMapProps(draggable.descriptor.id, draggable.placeholder);
  };

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idle$1;
      }

      return getMapProps(id, getDraggable(critical, state.dimensions), state.impact);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idle$1;
      }

      return getMapProps(id, getDraggable(completed.critical, state.dimensions), completed.impact);
    }

    if (state.phase === 'IDLE' && state.completed) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idle$1;
      }

      var wasOverId = whatIsDraggedOver(_completed.impact);
      var wasOver = Boolean(wasOverId) && wasOverId === id;
      var wasCombining = Boolean(_completed.result.combine);

      if (state.shouldFlush) {
        return idleWithoutAnimation;
      }

      if (wasOver) {
        return wasCombining ? idle$1 : idleWithoutAnimation;
      }

      return idle$1;
    }

    return idle$1;
  };

  return selector;
};
var mapDispatchToProps = {
  updateViewportMaxScroll: updateViewportMaxScroll
};
var defaultProps = {
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false
};
var ConnectedDroppable = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(makeMapStateToProps, mapDispatchToProps, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;

var _DraggableDimensionPu;

var DraggableDimensionPublisher = function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DraggableDimensionPublisher, _Component);

  function DraggableDimensionPublisher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.publishedDescriptor = null;
    _this.getMemoizedDescriptor = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (id, index, droppableId, type) {
      return {
        id: id,
        index: index,
        droppableId: droppableId,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.draggableId, _this.props.index, _this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDraggable(descriptor, _this.getDimension);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (descriptor === _this.publishedDescriptor) {
        return;
      }

      marshal.updateDraggable(_this.publishedDescriptor, descriptor, _this.getDimension);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot unpublish descriptor when none is published') : undefined : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDraggable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.getDimension = function (windowScroll) {
      if (windowScroll === void 0) {
        windowScroll = origin;
      }

      var targetRef = _this.props.getDraggableRef();

      var descriptor = _this.publishedDescriptor;
      !targetRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'DraggableDimensionPublisher cannot calculate a dimension when not attached to the DOM') : undefined : void 0;
      !descriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get dimension for unpublished draggable') : undefined : void 0;
      var computedStyles = window.getComputedStyle(targetRef);
      var borderBox = targetRef.getBoundingClientRect();
      var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["calculateBox"])(borderBox, computedStyles);
      var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, windowScroll);
      var placeholder = {
        client: client,
        tagName: targetRef.tagName.toLowerCase(),
        display: computedStyles.display
      };
      var displaceBy = {
        x: client.marginBox.width,
        y: client.marginBox.height
      };
      var dimension = {
        descriptor: descriptor,
        placeholder: placeholder,
        displaceBy: displaceBy,
        client: client,
        page: page
      };
      return dimension;
    };

    return _this;
  }

  var _proto = DraggableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.publish();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DraggableDimensionPublisher;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

DraggableDimensionPublisher.contextTypes = (_DraggableDimensionPu = {}, _DraggableDimensionPu[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired, _DraggableDimensionPu);

function isSvgElement(el) {
  return el instanceof getWindowFromEl(el).SVGElement;
}

var selector = "[" + dragHandle + "]";

var throwIfSVG = function throwIfSVG(el) {
  !!isSvgElement(el) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/dragging-svgs.md") : undefined : void 0;
};

var getDragHandleRef = function getDragHandleRef(draggableRef) {
  if (draggableRef.hasAttribute(dragHandle)) {
    throwIfSVG(draggableRef);
    return draggableRef;
  }

  var el = draggableRef.querySelector(selector);
  throwIfSVG(draggableRef);
  !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md\n    ") : undefined : void 0;
  !isHtmlElement(el) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'A drag handle must be a HTMLElement') : undefined : void 0;
  return el;
};

var retainingFocusFor = null;
var listenerOptions = {
  capture: true
};

var clearRetentionOnFocusChange = function () {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    window.addEventListener('focus', onWindowFocusChange, listenerOptions);
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    window.removeEventListener('focus', onWindowFocusChange, listenerOptions);
  };

  var onWindowFocusChange = function onWindowFocusChange() {
    unbind();
    retainingFocusFor = null;
  };

  var result = function result() {
    return bind();
  };

  result.cancel = function () {
    return unbind();
  };

  return result;
}();

var retain = function retain(id) {
  retainingFocusFor = id;
  clearRetentionOnFocusChange();
};

var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
  if (!retainingFocusFor) {
    return;
  }

  if (id !== retainingFocusFor) {
    return;
  }

  retainingFocusFor = null;
  clearRetentionOnFocusChange.cancel();
  var dragHandleRef = getDragHandleRef(draggableRef);

  if (!dragHandleRef) {
     true ? warning('Could not find drag handle in the DOM to focus on it') : undefined;
    return;
  }

  dragHandleRef.focus();
};

var retainer = {
  retain: retain,
  tryRestoreFocus: tryRestoreFocus
};

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
};

var shouldAllowDraggingFromTarget = (function (event, props) {
  if (props.canDragInteractiveElements) {
    return true;
  }

  var target = event.target,
      currentTarget = event.currentTarget;

  if (!isElement(target) || !isElement(currentTarget)) {
    return true;
  }

  return !isAnInteractiveElement(currentTarget, target);
});

var createScheduler = (function (callbacks) {
  var memoizedMove = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    var point = {
      x: x,
      y: y
    };
    callbacks.onMove(point);
  });
  var move = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(function (point) {
    return memoizedMove(point.x, point.y);
  });
  var moveUp = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveUp);
  var moveDown = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveDown);
  var moveRight = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveRight);
  var moveLeft = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onMoveLeft);
  var windowScrollMove = Object(raf_schd__WEBPACK_IMPORTED_MODULE_12__["default"])(callbacks.onWindowScroll);

  var cancel = function cancel() {
    move.cancel();
    moveUp.cancel();
    moveDown.cancel();
    moveRight.cancel();
    moveLeft.cancel();
    windowScrollMove.cancel();
  };

  return {
    move: move,
    moveUp: moveUp,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
    windowScrollMove: windowScrollMove,
    cancel: cancel
  };
});

var sloppyClickThreshold = 5;
var isSloppyClickThresholdExceeded = (function (original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
});

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var getOptions = function getOptions(shared, fromBinding) {
  return Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shared, fromBinding);
};

var bindEvents = function bindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
  });
};
var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};

var sharedOptions = {
  capture: true
};
var createPostDragEventPreventer = (function (getWindow) {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    bindEvents(getWindow(), pointerEvents, sharedOptions);
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    unbindEvents(getWindow(), pointerEvents, sharedOptions);
  };

  var pointerEvents = [{
    eventName: 'click',
    fn: function fn(event) {
      event.preventDefault();
      unbind();
    }
  }, {
    eventName: 'mousedown',
    fn: unbind
  }, {
    eventName: 'touchstart',
    fn: unbind
  }];

  var preventNext = function preventNext() {
    if (isBound) {
      unbind();
    }

    bind();
  };

  var preventer = {
    preventNext: preventNext,
    abort: unbind
  };
  return preventer;
});

var createEventMarshal = (function () {
  var isMouseDownHandled = false;

  var handle = function handle() {
    !!isMouseDownHandled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot handle mouse down as it is already handled') : undefined : void 0;
    isMouseDownHandled = true;
  };

  var isHandled = function isHandled() {
    return isMouseDownHandled;
  };

  var reset = function reset() {
    isMouseDownHandled = false;
  };

  return {
    handle: handle,
    isHandled: isHandled,
    reset: reset
  };
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;

var noop = function noop() {};

var mouseDownMarshal = createEventMarshal();
var createMouseSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false,
    pending: null
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    setState({
      pending: null,
      isDragging: true
    });
    fn();
  };

  var stopDragging = function stopDragging(fn, shouldBlockClick) {
    if (fn === void 0) {
      fn = noop;
    }

    if (shouldBlockClick === void 0) {
      shouldBlockClick = true;
    }

    schedule.cancel();
    unbindWindowEvents();
    mouseDownMarshal.reset();

    if (shouldBlockClick) {
      postDragEventPreventer.preventNext();
    }

    setState({
      isDragging: false,
      pending: null
    });
    fn();
  };

  var startPendingDrag = function startPendingDrag(point) {
    setState({
      pending: point,
      isDragging: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    stopDragging(noop, false);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    if (state.isDragging) {
      stopDragging(fn);
    }
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };

      if (state.isDragging) {
        event.preventDefault();
        schedule.move(point);
        return;
      }

      if (!state.pending) {
        stopPendingDrag();
         true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Expected there to be an active or pending drag when window mousemove event is received') : undefined;
      }

      if (!isSloppyClickThresholdExceeded(state.pending, point)) {
        return;
      }

      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: point,
          movementMode: 'FLUID'
        });
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (state.isDragging) {
        event.preventDefault();
      }

      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.currentTarget !== getWindow()) {
        return;
      }

      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'webkitmouseforcechanged',
    fn: function fn(event) {
      if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
         true ? warning('handling a mouse force changed event when it is not supported') : undefined;
        return;
      }

      var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
      var isForcePressing = event.webkitForce >= forcePressThreshold;

      if (isForcePressing) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    var win = getWindow();
    bindEvents(win, windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    var win = getWindow();
    unbindEvents(win, windowBindings, {
      capture: true
    });
  };

  var onMouseDown = function onMouseDown(event) {
    if (mouseDownMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not be able to perform a mouse down while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    mouseDownMarshal.handle();
    event.preventDefault();
    var point = {
      x: event.clientX,
      y: event.clientY
    };
    startPendingDrag(point);
  };

  var sensor = {
    onMouseDown: onMouseDown,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var getBorderBoxCenterPosition = (function (el) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(el.getBoundingClientRect()).center;
});

var _scrollJumpKeys;
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

var noop$1 = function noop() {};

var createKeyboardSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      getDraggableRef = _ref.getDraggableRef,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop$1;
    }

    setState({
      isDragging: true
    });
    bindWindowEvents();
    fn();
  };

  var stopDragging = function stopDragging(postDragFn) {
    if (postDragFn === void 0) {
      postDragFn = noop$1;
    }

    schedule.cancel();
    unbindWindowEvents();
    setState({
      isDragging: false
    });
    postDragFn();
  };

  var kill = function kill() {
    if (state.isDragging) {
      stopDragging();
    }
  };

  var cancel = function cancel() {
    stopDragging(callbacks.onCancel);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var schedule = createScheduler(callbacks);

  var onKeyDown = function onKeyDown(event) {
    if (!isDragging()) {
      if (event.defaultPrevented) {
        return;
      }

      if (!canStartCapturing(event)) {
        return;
      }

      if (event.keyCode !== space) {
        return;
      }

      var ref = getDraggableRef();
      !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot start a keyboard drag without a draggable ref') : undefined : void 0;
      var center = getBorderBoxCenterPosition(ref);
      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: center,
          movementMode: 'SNAP'
        });
      });
      return;
    }

    if (event.keyCode === escape) {
      event.preventDefault();
      cancel();
      return;
    }

    if (event.keyCode === space) {
      event.preventDefault();
      stopDragging(callbacks.onDrop);
      return;
    }

    if (event.keyCode === arrowDown) {
      event.preventDefault();
      schedule.moveDown();
      return;
    }

    if (event.keyCode === arrowUp) {
      event.preventDefault();
      schedule.moveUp();
      return;
    }

    if (event.keyCode === arrowRight) {
      event.preventDefault();
      schedule.moveRight();
      return;
    }

    if (event.keyCode === arrowLeft) {
      event.preventDefault();
      schedule.moveLeft();
      return;
    }

    if (scrollJumpKeys[event.keyCode]) {
      event.preventDefault();
      return;
    }

    preventStandardKeyEvents(event);
  };

  var windowBindings = [{
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: 'scroll',
    options: {
      capture: false
    },
    fn: function fn(event) {
      if (event.currentTarget !== getWindow()) {
        return;
      }

      callbacks.onWindowScroll();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var sensor = {
    onKeyDown: onKeyDown,
    kill: kill,
    isDragging: isDragging,
    isCapturing: isDragging,
    unmount: kill
  };
  return sensor;
});

var timeForLongPress = 150;
var forcePressThreshold = 0.15;
var touchStartMarshal = createEventMarshal();

var noop$2 = function noop() {};

var webkitHack = function () {
  var stub = {
    preventTouchMove: noop$2,
    releaseTouchMove: noop$2
  };

  if (typeof window === 'undefined') {
    return stub;
  }

  if (!('ontouchstart' in window)) {
    return stub;
  }

  var isBlocking = false;
  window.addEventListener('touchmove', function (event) {
    if (!isBlocking) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
  }, {
    passive: false,
    capture: false
  });

  var preventTouchMove = function preventTouchMove() {
    isBlocking = true;
  };

  var releaseTouchMove = function releaseTouchMove() {
    isBlocking = false;
  };

  return {
    preventTouchMove: preventTouchMove,
    releaseTouchMove: releaseTouchMove
  };
}();

var initial = {
  isDragging: false,
  pending: null,
  hasMoved: false,
  longPressTimerId: null
};
var createTouchSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing,
      getShouldRespectForceTouch = _ref.getShouldRespectForceTouch;
  var state = initial;

  var setState = function setState(partial) {
    state = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, partial);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging || state.longPressTimerId);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging() {
    var pending = state.pending;

    if (!pending) {
      stopPendingDrag();
       true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'cannot start a touch drag without a pending position') : undefined;
    }

    setState({
      isDragging: true,
      hasMoved: false,
      pending: null,
      longPressTimerId: null
    });
    callbacks.onLift({
      clientSelection: pending,
      movementMode: 'FLUID'
    });
  };

  var stopDragging = function stopDragging(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    postDragEventPreventer.preventNext();
    setState(initial);
    fn();
  };

  var startPendingDrag = function startPendingDrag(event) {
    var touch = event.touches[0];
    var clientX = touch.clientX,
        clientY = touch.clientY;
    var point = {
      x: clientX,
      y: clientY
    };
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setState({
      longPressTimerId: longPressTimerId,
      pending: point,
      isDragging: false,
      hasMoved: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    if (state.longPressTimerId) {
      clearTimeout(state.longPressTimerId);
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    setState(initial);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    if (state.isDragging) {
      stopDragging(fn);
    }
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'touchmove',
    options: {
      passive: false
    },
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      if (!state.hasMoved) {
        setState({
          hasMoved: true
        });
      }

      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      schedule.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      if (!state.isDragging && !state.pending) {
        return;
      }

      if (state.hasMoved) {
        event.preventDefault();
        return;
      }

      if (!getShouldRespectForceTouch()) {
        event.preventDefault();
        return;
      }

      var touch = event.touches[0];

      if (touch.force >= forcePressThreshold) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var onTouchStart = function onTouchStart(event) {
    if (touchStartMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Should not be able to perform a touch start while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    touchStartMarshal.handle();
    webkitHack.preventTouchMove();
    startPendingDrag(event);
  };

  var sensor = {
    onTouchStart: onTouchStart,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var _DragHandle$contextTy;

var preventHtml5Dnd = function preventHtml5Dnd(event) {
  event.preventDefault();
};

var DragHandle = function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DragHandle, _Component);

  function DragHandle(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.mouseSensor = void 0;
    _this.keyboardSensor = void 0;
    _this.touchSensor = void 0;
    _this.sensors = void 0;
    _this.styleContext = void 0;
    _this.canLift = void 0;
    _this.isFocused = false;
    _this.lastDraggableRef = void 0;

    _this.onFocus = function () {
      _this.isFocused = true;
    };

    _this.onBlur = function () {
      _this.isFocused = false;
    };

    _this.onKeyDown = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.touchSensor.isCapturing()) {
        return;
      }

      _this.keyboardSensor.onKeyDown(event);
    };

    _this.onMouseDown = function (event) {
      if (_this.keyboardSensor.isCapturing() || _this.mouseSensor.isCapturing()) {
        return;
      }

      _this.mouseSensor.onMouseDown(event);
    };

    _this.onTouchStart = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
        return;
      }

      _this.touchSensor.onTouchStart(event);
    };

    _this.canStartCapturing = function (event) {
      if (_this.isAnySensorCapturing()) {
        return false;
      }

      if (!_this.canLift(_this.props.draggableId)) {
        return false;
      }

      return shouldAllowDraggingFromTarget(event, _this.props);
    };

    _this.isAnySensorCapturing = function () {
      return _this.sensors.some(function (sensor) {
        return sensor.isCapturing();
      });
    };

    _this.getProvided = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (isEnabled) {
      if (!isEnabled) {
        return null;
      }

      var provided = {
        onMouseDown: _this.onMouseDown,
        onKeyDown: _this.onKeyDown,
        onTouchStart: _this.onTouchStart,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        tabIndex: 0,
        'data-react-beautiful-dnd-drag-handle': _this.styleContext,
        'aria-roledescription': 'Draggable item. Press space bar to lift',
        draggable: false,
        onDragStart: preventHtml5Dnd
      };
      return provided;
    });

    var getWindow = function getWindow() {
      return getWindowFromEl(_this.props.getDraggableRef());
    };

    var args = {
      callbacks: _this.props.callbacks,
      getDraggableRef: _this.props.getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: _this.canStartCapturing,
      getShouldRespectForceTouch: _this.props.getShouldRespectForceTouch
    };
    _this.mouseSensor = createMouseSensor(args);
    _this.keyboardSensor = createKeyboardSensor(args);
    _this.touchSensor = createTouchSensor(args);
    _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor];
    _this.styleContext = context[styleKey];
    _this.canLift = context[canLiftKey];
    return _this;
  }

  var _proto = DragHandle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var draggableRef = this.props.getDraggableRef();
    this.lastDraggableRef = draggableRef;
    !draggableRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot get draggable ref from drag handle') : undefined : void 0;

    if (!this.props.isEnabled) {
      return;
    }

    var dragHandleRef = getDragHandleRef(draggableRef);
    retainer.tryRestoreFocus(this.props.draggableId, dragHandleRef);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var ref = this.props.getDraggableRef();

    if (ref !== this.lastDraggableRef) {
      this.lastDraggableRef = ref;

      if (ref && this.isFocused && this.props.isEnabled) {
        getDragHandleRef(ref).focus();
      }
    }

    var isCapturing = this.isAnySensorCapturing();

    if (!isCapturing) {
      return;
    }

    var isBeingDisabled = prevProps.isEnabled && !this.props.isEnabled;

    if (isBeingDisabled) {
      this.sensors.forEach(function (sensor) {
        if (!sensor.isCapturing()) {
          return;
        }

        var wasDragging = sensor.isDragging();
        sensor.kill();

        if (wasDragging) {
           true ? warning('You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled') : undefined;

          _this2.props.callbacks.onCancel();
        }
      });
    }

    var isDragAborted = prevProps.isDragging && !this.props.isDragging;

    if (isDragAborted) {
      this.sensors.forEach(function (sensor) {
        if (sensor.isCapturing()) {
          sensor.kill();
        }
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    this.sensors.forEach(function (sensor) {
      var wasDragging = sensor.isDragging();
      sensor.unmount();

      if (wasDragging) {
        _this3.props.callbacks.onCancel();
      }
    });

    var shouldRetainFocus = function () {
      if (!_this3.props.isEnabled) {
        return false;
      }

      if (!_this3.isFocused) {
        return false;
      }

      return _this3.props.isDragging || _this3.props.isDropAnimating;
    }();

    if (shouldRetainFocus) {
      retainer.retain(this.props.draggableId);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    return children(this.getProvided(isEnabled));
  };

  return DragHandle;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

DragHandle.contextTypes = (_DragHandle$contextTy = {}, _DragHandle$contextTy[styleKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _DragHandle$contextTy[canLiftKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired, _DragHandle$contextTy);

var checkOwnProps$1 = (function (props) {
  !_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_14___default()(props.index) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Draggable requires an integer index prop') : undefined : void 0;
  !props.draggableId ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Draggable requires a draggableId') : undefined : void 0;
  !(typeof props.isDragDisabled === 'boolean') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'isDragDisabled must be a boolean') : undefined : void 0;
});

var _Draggable$contextTyp;
var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

var Draggable = function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Draggable, _React$Component);

  function Draggable(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.callbacks = void 0;
    _this.styleContext = void 0;
    _this.ref = null;

    _this.onMoveEnd = function (event) {
      var isDropping = Boolean(_this.props.dragging && _this.props.dragging.dropping);

      if (!isDropping) {
        return;
      }

      if (event.propertyName !== 'transform') {
        return;
      }

      _this.props.dropAnimationFinished();
    };

    _this.onLift = function (options) {
      start('LIFT');
      var ref = _this.ref;
      !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false) : undefined : void 0;
      !!_this.props.isDragDisabled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Cannot lift a Draggable when it is disabled') : undefined : void 0;
      var clientSelection = options.clientSelection,
          movementMode = options.movementMode;
      var _this$props = _this.props,
          lift = _this$props.lift,
          draggableId = _this$props.draggableId;
      lift({
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: movementMode
      });
      finish('LIFT');
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDraggableRef = function () {
      return _this.ref;
    };

    _this.getShouldRespectForceTouch = function () {
      return _this.props.shouldRespectForceTouch;
    };

    _this.getDraggingStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (dragging) {
      var dimension = dragging.dimension;
      var box = dimension.client;
      var offset = dragging.offset,
          combineWith = dragging.combineWith,
          dropping = dragging.dropping;
      var isCombining = Boolean(combineWith);
      var shouldAnimate = getShouldDraggingAnimate(dragging);
      var isDropAnimating = Boolean(dropping);
      var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
      var style = {
        position: 'fixed',
        top: box.marginBox.top,
        left: box.marginBox.left,
        boxSizing: 'border-box',
        width: box.borderBox.width,
        height: box.borderBox.height,
        transition: getDraggingTransition(shouldAnimate, dropping),
        transform: transform,
        opacity: getDraggingOpacity(isCombining, isDropAnimating),
        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
        pointerEvents: 'none'
      };
      return style;
    });
    _this.getSecondaryStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (secondary) {
      return {
        transform: transforms.moveTo(secondary.offset),
        transition: secondary.shouldAnimateDisplacement ? null : 'none'
      };
    });
    _this.getDraggingProvided = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (dragging, dragHandleProps) {
      var style = _this.getDraggingStyle(dragging);

      var isDropping = Boolean(dragging.dropping);
      var provided = {
        innerRef: _this.setRef,
        draggableProps: {
          'data-react-beautiful-dnd-draggable': _this.styleContext,
          style: style,
          onTransitionEnd: isDropping ? _this.onMoveEnd : null
        },
        dragHandleProps: dragHandleProps
      };
      return provided;
    });
    _this.getSecondaryProvided = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (secondary, dragHandleProps) {
      var style = _this.getSecondaryStyle(secondary);

      var provided = {
        innerRef: _this.setRef,
        draggableProps: {
          'data-react-beautiful-dnd-draggable': _this.styleContext,
          style: style,
          onTransitionEnd: null
        },
        dragHandleProps: dragHandleProps
      };
      return provided;
    });
    _this.getDraggingSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (dragging) {
      return {
        isDragging: true,
        isDropAnimating: Boolean(dragging.dropping),
        dropAnimation: dragging.dropping,
        mode: dragging.mode,
        draggingOver: dragging.draggingOver,
        combineWith: dragging.combineWith,
        combineTargetFor: null
      };
    });
    _this.getSecondarySnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (secondary) {
      return {
        isDragging: false,
        isDropAnimating: false,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor: secondary.combineTargetFor,
        combineWith: null
      };
    });

    _this.renderChildren = function (dragHandleProps) {
      var dragging = _this.props.dragging;
      var secondary = _this.props.secondary;
      var children = _this.props.children;

      if (dragging) {
        return children(_this.getDraggingProvided(dragging, dragHandleProps), _this.getDraggingSnapshot(dragging));
      }

      !secondary ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'If no DraggingMapProps are provided, then SecondaryMapProps are required') : undefined : void 0;
      return children(_this.getSecondaryProvided(secondary, dragHandleProps), _this.getSecondarySnapshot(secondary));
    };

    var callbacks = {
      onLift: _this.onLift,
      onMove: function onMove(clientSelection) {
        return props.move({
          client: clientSelection
        });
      },
      onDrop: function onDrop() {
        return props.drop({
          reason: 'DROP'
        });
      },
      onCancel: function onCancel() {
        return props.drop({
          reason: 'CANCEL'
        });
      },
      onMoveUp: props.moveUp,
      onMoveDown: props.moveDown,
      onMoveRight: props.moveRight,
      onMoveLeft: props.moveLeft,
      onWindowScroll: function onWindowScroll() {
        return props.moveByWindowScroll({
          newScroll: getWindowScroll()
        });
      }
    };
    _this.callbacks = callbacks;
    _this.styleContext = context[styleKey];

    if (true) {
      checkOwnProps$1(props);
    }

    return _this;
  }

  var _proto = Draggable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.ref = null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        draggableId = _this$props2.draggableId,
        index = _this$props2.index,
        dragging = _this$props2.dragging,
        isDragDisabled = _this$props2.isDragDisabled,
        disableInteractiveElementBlocking = _this$props2.disableInteractiveElementBlocking;
    var droppableId = this.context[droppableIdKey];
    var type = this.context[droppableTypeKey];
    var isDragging = Boolean(dragging);
    var isDropAnimating = Boolean(dragging && dragging.dropping);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DraggableDimensionPublisher, {
      key: draggableId,
      draggableId: draggableId,
      droppableId: droppableId,
      type: type,
      index: index,
      getDraggableRef: this.getDraggableRef
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DragHandle, {
      draggableId: draggableId,
      isDragging: isDragging,
      isDropAnimating: isDropAnimating,
      isEnabled: !isDragDisabled,
      callbacks: this.callbacks,
      getDraggableRef: this.getDraggableRef,
      getShouldRespectForceTouch: this.getShouldRespectForceTouch,
      canDragInteractiveElements: disableInteractiveElementBlocking
    }, this.renderChildren));
  };

  return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Draggable.contextTypes = (_Draggable$contextTyp = {}, _Draggable$contextTyp[droppableIdKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Draggable$contextTyp[droppableTypeKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Draggable$contextTyp[styleKey] = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired, _Draggable$contextTyp);

var getCombineWith = function getCombineWith(impact) {
  if (!impact.merge) {
    return null;
  }

  return impact.merge.combine.draggableId;
};

var defaultMapProps = {
  secondary: {
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true
  },
  dragging: null
};
var makeMapStateToProps$1 = function makeMapStateToProps() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getSecondaryProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      secondary: {
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement
      },
      dragging: null
    };
  });
  var getDraggingProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, mode, dimension, draggingOver, combineWith, forceShouldAnimate) {
    return {
      dragging: {
        mode: mode,
        dropping: null,
        offset: offset,
        dimension: dimension,
        draggingOver: draggingOver,
        combineWith: combineWith,
        forceShouldAnimate: forceShouldAnimate
      },
      secondary: null
    };
  });

  var getSecondaryMovement = function getSecondaryMovement(ownId, draggingId, impact) {
    var map = impact.movement.map;
    var displacement = map[ownId];
    var movement = impact.movement;
    var merge = impact.merge;
    var isCombinedWith = Boolean(merge && merge.combine.draggableId === ownId);
    var displacedBy = movement.displacedBy.point;
    var offset = memoizedOffset(displacedBy.x, displacedBy.y);

    if (isCombinedWith) {
      return getSecondaryProps(displacement ? offset : origin, draggingId, displacement ? displacement.shouldAnimate : true);
    }

    if (!displacement) {
      return null;
    }

    if (!displacement.isVisible) {
      return null;
    }

    return getSecondaryProps(offset, null, displacement.shouldAnimate);
  };

  var draggingSelector = function draggingSelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var mode = state.movementMode;
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWith(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getDraggingProps(memoizedOffset(offset.x, offset.y), mode, dimension, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var _dimension = state.dimensions.draggables[ownProps.draggableId];

      var _draggingOver = whatIsDraggedOver(completed.impact);

      var _combineWith = getCombineWith(completed.impact);

      var duration = state.dropDuration;
      var _mode = completed.result.mode;
      return {
        dragging: {
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: _mode,
          forceShouldAnimate: null,
          dropping: {
            duration: duration,
            curve: curves.drop,
            moveTo: state.newHomeClientOffset,
            opacity: _combineWith ? combine.opacity.drop : null,
            scale: _combineWith ? combine.scale.drop : null
          }
        },
        secondary: null
      };
    }

    return null;
  };

  var secondarySelector = function secondarySelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getSecondaryMovement(ownProps.draggableId, state.critical.draggable.id, state.impact);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getSecondaryMovement(ownProps.draggableId, completed.result.draggableId, completed.impact);
    }

    return null;
  };

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || defaultMapProps;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  lift: lift,
  move: move,
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight,
  moveByWindowScroll: moveByWindowScroll,
  drop: drop,
  dropAnimationFinished: dropAnimationFinished
};
var defaultProps$1 = {
  isDragDisabled: false,
  disableInteractiveElementBlocking: false,
  shouldRespectForceTouch: true
};
var ConnectedDraggable = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
ConnectedDraggable.defaultProps = defaultProps$1;




/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.5
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: createProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-redux/es/utils/PropTypes.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");





var didWarnAboutReceivingStore = false;

function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }

  didWarnAboutReceivingStore = true;
  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_4__["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider(storeKey) {
  var _Provider$childContex;

  if (storeKey === void 0) {
    storeKey = 'store';
  }

  var subscriptionKey = storeKey + "Subscription";

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      var _this;

      _this = _Component.call(this, props, context) || this;
      _this[storeKey] = props.store;
      return _this;
    }

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["storeShape"].isRequired, _Provider$childContex[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_3__["subscriptionShape"], _Provider$childContex);
  return Provider;
}
/* harmony default export */ __webpack_exports__["default"] = (createProvider());

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/PropTypes */ "./node_modules/react-redux/es/utils/PropTypes.js");










var hotReloadingVersion = 0;
var dummyState = {};

function noop() {}

function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);

        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };
  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  var _contextTypes, _childContextTypes;

  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;
  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["storeShape"], _contextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_9__["subscriptionShape"], _childContextTypes);
  return function wrapWithConnect(WrappedComponent) {
    invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps

      /* eslint-disable react/no-deprecated */

    });

    var Connect =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _Component);

      function Connect(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));

        _this.initSelector();

        _this.initSubscription();

        return _this;
      }

      var _proto = Connect.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref3;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
      };

      _proto.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.

        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      _proto.getWrappedInstance = function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
        return this.wrappedInstance;
      };

      _proto.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      _proto.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      _proto.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_8__["default"](this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.

        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      _proto.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      _proto.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad

        var withExtras = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      _proto.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react__WEBPACK_IMPORTED_MODULE_6__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
    /* eslint-enable react/no-deprecated */


    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.

          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }

          this.initSubscription();

          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["createProvider"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/PropTypes.js ***!
  \********************************************************/
/*! exports provided: subscriptionShape, storeShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionShape", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeShape", function() { return storeShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var subscriptionShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  trySubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  tryUnsubscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  notifyNestedSubs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isSubscribed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});
var storeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;

      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub, onStateChange) {
    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-simple-code-editor/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-simple-code-editor/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global global */

var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;

var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;

var isWindows = 'navigator' in global && /Win/i.test(navigator.platform);
var isMacLike = 'navigator' in global && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

var className = 'npm__react-simple-code-editor__textarea';

var cssText = /* CSS */'\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.' + className + ':empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * IE doesn\'t support \'-webkit-text-fill-color\'\n * So we use \'color: transparent\' to make the text transparent on IE\n * Unlike other browsers, it doesn\'t affect caret color in IE\n */\n.' + className + '-ie {\n  color: transparent !important;\n}\n\n.' + className + '-ie::selection {\n  background-color: #accef7 !important;\n  color: transparent !important;\n}\n';

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      capture: true,
      ie: false
    }, _this._recordCurrentState = function () {
      var input = _this._input;

      if (!input) return;

      // Save current state of the input
      var value = input.value,
          selectionStart = input.selectionStart,
          selectionEnd = input.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      });
    }, _this._getLines = function (text, position) {
      return text.substring(0, position).split('\n');
    }, _this._recordChange = function (record) {
      var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$_history = _this._history,
          stack = _this$_history.stack,
          offset = _this$_history.offset;


      if (stack.length && offset > -1) {
        // When something updates, drop the redo operations
        _this._history.stack = stack.slice(0, offset + 1);

        // Limit the number of operations to 100
        var count = _this._history.stack.length;

        if (count > HISTORY_LIMIT) {
          var extras = count - HISTORY_LIMIT;

          _this._history.stack = stack.slice(extras, count);
          _this._history.offset = Math.max(_this._history.offset - extras, 0);
        }
      }

      var timestamp = Date.now();

      if (overwrite) {
        var last = _this._history.stack[_this._history.offset];

        if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
          // A previous entry exists and was in short interval

          // Match the last word in the line
          var re = /[^a-z0-9]([a-z0-9]+)$/i;

          // Get the previous line
          var previous = _this._getLines(last.value, last.selectionStart).pop().match(re);

          // Get the current line
          var current = _this._getLines(record.value, record.selectionStart).pop().match(re);

          if (previous && current && current[1].startsWith(previous[1])) {
            // The last word of the previous line and current line match
            // Overwrite previous entry so that undo will remove whole word
            _this._history.stack[_this._history.offset] = _extends({}, record, { timestamp: timestamp });

            return;
          }
        }
      }

      // Add the new operation to the stack
      _this._history.stack.push(_extends({}, record, { timestamp: timestamp }));
      _this._history.offset++;
    }, _this._updateInput = function (record) {
      var input = _this._input;

      if (!input) return;

      // Update values and selection state
      input.value = record.value;
      input.selectionStart = record.selectionStart;
      input.selectionEnd = record.selectionEnd;

      _this.props.onValueChange(record.value);
    }, _this._applyEdits = function (record) {
      // Save last selection state
      var input = _this._input;
      var last = _this._history.stack[_this._history.offset];

      if (last && input) {
        _this._history.stack[_this._history.offset] = _extends({}, last, {
          selectionStart: input.selectionStart,
          selectionEnd: input.selectionEnd
        });
      }

      // Save the changes
      _this._recordChange(record);
      _this._updateInput(record);
    }, _this._undoEdit = function () {
      var _this$_history2 = _this._history,
          stack = _this$_history2.stack,
          offset = _this$_history2.offset;

      // Get the previous edit

      var record = stack[offset - 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.max(offset - 1, 0);
      }
    }, _this._redoEdit = function () {
      var _this$_history3 = _this._history,
          stack = _this$_history3.stack,
          offset = _this$_history3.offset;

      // Get the next edit

      var record = stack[offset + 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.min(offset + 1, stack.length - 1);
      }
    }, _this._handleKeyDown = function (e) {
      var _this$props = _this.props,
          tabSize = _this$props.tabSize,
          insertSpaces = _this$props.insertSpaces,
          ignoreTabKey = _this$props.ignoreTabKey;
      var _e$target = e.target,
          value = _e$target.value,
          selectionStart = _e$target.selectionStart,
          selectionEnd = _e$target.selectionEnd;


      var tabCharacter = (insertSpaces ? ' ' : '     ').repeat(tabSize);

      if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
        // Prevent focus change
        e.preventDefault();

        if (e.shiftKey) {
          // Unindent selected lines
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine = linesBeforeCaret.length - 1;
          var endLine = _this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split('\n').map(function (line, i) {
            if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
              return line.substring(tabCharacter.length);
            }

            return line;
          }).join('\n');

          if (value !== nextValue) {
            var startLineText = linesBeforeCaret[startLine];

            _this._applyEdits({
              value: nextValue,
              // Move the start cursor if first line in selection was modified
              // It was modified only if it started with a tab
              selectionStart: startLineText.startsWith(tabCharacter) ? selectionStart - tabCharacter.length : selectionStart,
              // Move the end cursor by total number of characters removed
              selectionEnd: selectionEnd - (value.length - nextValue.length)
            });
          }
        } else if (selectionStart !== selectionEnd) {
          // Indent selected lines
          var _linesBeforeCaret = _this._getLines(value, selectionStart);
          var _startLine = _linesBeforeCaret.length - 1;
          var _endLine = _this._getLines(value, selectionEnd).length - 1;
          var _startLineText = _linesBeforeCaret[_startLine];

          _this._applyEdits({
            value: value.split('\n').map(function (line, i) {
              if (i >= _startLine && i <= _endLine) {
                return tabCharacter + line;
              }

              return line;
            }).join('\n'),
            // Move the start cursor by number of characters added in first line of selection
            // Don't move it if it there was no text before cursor
            selectionStart: /\S/.test(_startLineText) ? selectionStart + tabCharacter.length : selectionStart,
            // Move the end cursor by total number of characters added
            selectionEnd: selectionEnd + tabCharacter.length * (_endLine - _startLine + 1)
          });
        } else {
          var updatedSelection = selectionStart + tabCharacter.length;

          _this._applyEdits({
            // Insert tab character at caret
            value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
            // Update caret position
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);

        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          // Prevent default delete behaviour
          e.preventDefault();

          var _updatedSelection = selectionStart - tabCharacter.length;

          _this._applyEdits({
            // Remove tab character at caret
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            // Update caret position
            selectionStart: _updatedSelection,
            selectionEnd: _updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_ENTER) {
        // Ignore selections
        if (selectionStart === selectionEnd) {
          // Get the current line
          var line = _this._getLines(value, selectionStart).pop();
          var matches = line.match(/^\s+/);

          if (matches && matches[0]) {
            e.preventDefault();

            // Preserve indentation on inserting a new line
            var indent = '\n' + matches[0];
            var _updatedSelection2 = selectionStart + indent.length;

            _this._applyEdits({
              // Insert indentation character at caret
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              // Update caret position
              selectionStart: _updatedSelection2,
              selectionEnd: _updatedSelection2
            });
          }
        }
      } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
        var chars = void 0;

        if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
          chars = ['(', ')'];
        } else if (e.keyCode === KEYCODE_BRACKETS) {
          if (e.shiftKey) {
            chars = ['{', '}'];
          } else {
            chars = ['[', ']'];
          }
        } else if (e.keyCode === KEYCODE_QUOTE) {
          if (e.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
          chars = ['`', '`'];
        }

        // If text is selected, wrap them in the characters
        if (selectionStart !== selectionEnd && chars) {
          e.preventDefault();

          _this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            // Update caret position
            selectionStart: selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? // Trigger undo with ⌘+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z : // Trigger undo with Ctrl+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
        e.preventDefault();

        _this._undoEdit();
      } else if ((isMacLike ? // Trigger redo with ⌘+Shift+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? // Trigger redo with Ctrl+Y on Windows
      e.ctrlKey && e.keyCode === KEYCODE_Y : // Trigger redo with Ctrl+Shift+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
        e.preventDefault();

        _this._redoEdit();
      } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
        e.preventDefault();

        // Toggle capturing tab key so users can focus away
        _this.setState(function (state) {
          return {
            capture: !state.capture
          };
        });
      }
    }, _this._handleChange = function (e) {
      var _e$target2 = e.target,
          value = _e$target2.value,
          selectionStart = _e$target2.selectionStart,
          selectionEnd = _e$target2.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }, true);

      _this.props.onValueChange(value);
    }, _this._history = {
      stack: [],
      offset: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (/Trident/.test(navigator.userAgent)) {
        // The browser is Internet Explorer
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ ie: true });
      }

      this._recordCurrentState();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          style = _props.style,
          padding = _props.padding,
          highlight = _props.highlight,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled,
          form = _props.form,
          maxLength = _props.maxLength,
          minLength = _props.minLength,
          name = _props.name,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          required = _props.required,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onValueChange = _props.onValueChange,
          tabSize = _props.tabSize,
          insertSpaces = _props.insertSpaces,
          ignoreTabKey = _props.ignoreTabKey,
          rest = _objectWithoutProperties(_props, ['value', 'style', 'padding', 'highlight', 'autoFocus', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'onFocus', 'onBlur', 'onValueChange', 'tabSize', 'insertSpaces', 'ignoreTabKey']);

      var contentStyle = {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };

      var highlighted = highlight(value);

      return React.createElement(
        'div',
        _extends({}, rest, { style: _extends({}, styles.container, style) }),
        React.createElement('textarea', {
          ref: function ref(c) {
            return _this2._input = c;
          },
          style: _extends({}, styles.editor, styles.textarea, contentStyle),
          className: className + ' ' + (this.state.ie ? className + '-ie' : ''),
          value: value,
          onChange: this._handleChange,
          onKeyDown: this._handleKeyDown,
          onFocus: onFocus,
          onBlur: onBlur,
          disabled: disabled,
          form: form,
          maxLength: maxLength,
          minLength: minLength,
          name: name,
          placeholder: placeholder,
          readOnly: readOnly,
          required: required,
          autoFocus: autoFocus,
          autoCapitalize: 'off',
          autoComplete: 'off',
          autoCorrect: 'off',
          spellCheck: false,
          'data-gramm': false
        }),
        React.createElement('pre', _extends({
          'aria-hidden': 'true',
          style: _extends({}, styles.editor, styles.highlight, contentStyle)
        }, typeof highlighted === 'string' ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } } : { children: highlighted })),
        React.createElement(
          'style',
          { type: 'text/css' },
          cssText
        )
      );
    }
  }, {
    key: 'session',
    get: function get() {
      return {
        history: this._history
      };
    },
    set: function set(session) {
      this._history = session.history;
    }
  }]);

  return Editor;
}(React.Component);

Editor.defaultProps = {
  tabSize: 2,
  insertSpaces: true,
  ignoreTabKey: false,
  padding: 0
};
exports.default = Editor;


var styles = {
  container: {
    position: 'relative',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    boxSizing: 'border-box',
    padding: 0
  },
  textarea: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    margin: 0,
    border: 0,
    resize: 'none',
    background: 'none',
    overflow: 'hidden',
    color: 'inherit',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextFillColor: 'transparent'
  },
  highlight: {
    position: 'relative',
    margin: 0,
    border: 0,
    pointerEvents: 'none'
  },
  editor: {
    boxSizing: 'inherit',
    display: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontVariantLigatures: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    tabSize: 'inherit',
    textIndent: 'inherit',
    textRendering: 'inherit',
    textTransform: 'inherit',
    whiteSpace: 'inherit',
    wordBreak: 'inherit'
  }
};
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/rfc6902/diff.js":
/*!**************************************!*\
  !*** ./node_modules/rfc6902/diff.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var equal_1 = __webpack_require__(/*! ./equal */ "./node_modules/rfc6902/equal.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isDestructive(_a) {
    var op = _a.op;
    return op === 'remove' || op === 'replace' || op === 'copy' || op === 'move';
}
exports.isDestructive = isDestructive;
/**
List the keys in `minuend` that are not in `subtrahend`.

A key is only considered if it is both 1) an own-property (o.hasOwnProperty(k))
of the object, and 2) has a value that is not undefined. This is to match JSON
semantics, where JSON object serialization drops keys with undefined values.

@param minuend Object of interest
@param subtrahend Object of comparison
@returns Array of keys that are in `minuend` but not in `subtrahend`.
*/
function subtract(minuend, subtrahend) {
    // initialize empty object; we only care about the keys, the values can be anything
    var obj = {};
    // build up obj with all the properties of minuend
    for (var add_key in minuend) {
        if (hasOwnProperty.call(minuend, add_key) && minuend[add_key] !== undefined) {
            obj[add_key] = 1;
        }
    }
    // now delete all the properties of subtrahend from obj
    // (deleting a missing key has no effect)
    for (var del_key in subtrahend) {
        if (hasOwnProperty.call(subtrahend, del_key) && subtrahend[del_key] !== undefined) {
            delete obj[del_key];
        }
    }
    // finally, extract whatever keys remain in obj
    return Object.keys(obj);
}
exports.subtract = subtract;
/**
List the keys that shared by all `objects`.

The semantics of what constitutes a "key" is described in {@link subtract}.

@param objects Array of objects to compare
@returns Array of keys that are in ("own-properties" of) every object in `objects`.
*/
function intersection(objects) {
    var length = objects.length;
    // prepare empty counter to keep track of how many objects each key occurred in
    var counter = {};
    // go through each object and increment the counter for each key in that object
    for (var i = 0; i < length; i++) {
        var object = objects[i];
        for (var key in object) {
            if (hasOwnProperty.call(object, key) && object[key] !== undefined) {
                counter[key] = (counter[key] || 0) + 1;
            }
        }
    }
    // now delete all keys from the counter that were not seen in every object
    for (var key in counter) {
        if (counter[key] < length) {
            delete counter[key];
        }
    }
    // finally, extract whatever keys remain in the counter
    return Object.keys(counter);
}
exports.intersection = intersection;
function isArrayAdd(array_operation) {
    return array_operation.op === 'add';
}
function isArrayRemove(array_operation) {
    return array_operation.op === 'remove';
}
function appendArrayOperation(base, operation) {
    return {
        // the new operation must be pushed on the end
        operations: base.operations.concat(operation),
        cost: base.cost + 1,
    };
}
/**
Calculate the shortest sequence of operations to get from `input` to `output`,
using a dynamic programming implementation of the Levenshtein distance algorithm.

To get from the input ABC to the output AZ we could just delete all the input
and say "insert A, insert Z" and be done with it. That's what we do if the
input is empty. But we can be smarter.

          output
               A   Z
               -   -
          [0]  1   2
input A |  1  [0]  1
      B |  2  [1]  1
      C |  3   2  [2]

1) start at 0,0 (+0)
2) keep A (+0)
3) remove B (+1)
4) replace C with Z (+1)

If the `input` (source) is empty, they'll all be in the top row, resulting in an
array of 'add' operations.
If the `output` (target) is empty, everything will be in the left column,
resulting in an array of 'remove' operations.

@returns A list of add/remove/replace operations.
*/
function diffArrays(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    // set up cost matrix (very simple initialization: just a map)
    var memo = {
        '0,0': { operations: [], cost: 0 },
    };
    /**
    Calculate the cheapest sequence of operations required to get from
    input.slice(0, i) to output.slice(0, j).
    There may be other valid sequences with the same cost, but none cheaper.
  
    @param i The row in the layout above
    @param j The column in the layout above
    @returns An object containing a list of operations, along with the total cost
             of applying them (+1 for each add/remove/replace operation)
    */
    function dist(i, j) {
        // memoized
        var memo_key = i + "," + j;
        var memoized = memo[memo_key];
        if (memoized === undefined) {
            if (i > 0 && j > 0 && equal_1.compare(input[i - 1], output[j - 1])) {
                // equal (no operations => no cost)
                memoized = dist(i - 1, j - 1);
            }
            else {
                var alternatives = [];
                if (i > 0) {
                    // NOT topmost row
                    var remove_base = dist(i - 1, j);
                    var remove_operation = {
                        op: 'remove',
                        index: i - 1,
                    };
                    alternatives.push(appendArrayOperation(remove_base, remove_operation));
                }
                if (j > 0) {
                    // NOT leftmost column
                    var add_base = dist(i, j - 1);
                    var add_operation = {
                        op: 'add',
                        index: i - 1,
                        value: output[j - 1],
                    };
                    alternatives.push(appendArrayOperation(add_base, add_operation));
                }
                if (i > 0 && j > 0) {
                    // TABLE MIDDLE
                    // supposing we replaced it, compute the rest of the costs:
                    var replace_base = dist(i - 1, j - 1);
                    // okay, the general plan is to replace it, but we can be smarter,
                    // recursing into the structure and replacing only part of it if
                    // possible, but to do so we'll need the original value
                    var replace_operation = {
                        op: 'replace',
                        index: i - 1,
                        original: input[i - 1],
                        value: output[j - 1],
                    };
                    alternatives.push(appendArrayOperation(replace_base, replace_operation));
                }
                // the only other case, i === 0 && j === 0, has already been memoized
                // the meat of the algorithm:
                // sort by cost to find the lowest one (might be several ties for lowest)
                // [4, 6, 7, 1, 2].sort((a, b) => a - b) -> [ 1, 2, 4, 6, 7 ]
                var best = alternatives.sort(function (a, b) { return a.cost - b.cost; })[0];
                memoized = best;
            }
            memo[memo_key] = memoized;
        }
        return memoized;
    }
    // handle weird objects masquerading as Arrays that don't have proper length
    // properties by using 0 for everything but positive numbers
    var input_length = (isNaN(input.length) || input.length <= 0) ? 0 : input.length;
    var output_length = (isNaN(output.length) || output.length <= 0) ? 0 : output.length;
    var array_operations = dist(input_length, output_length).operations;
    var padded_operations = array_operations.reduce(function (_a, array_operation) {
        var operations = _a[0], padding = _a[1];
        if (isArrayAdd(array_operation)) {
            var padded_index = array_operation.index + 1 + padding;
            var index_token = padded_index < (input_length + padding) ? String(padded_index) : '-';
            var operation = {
                op: array_operation.op,
                path: ptr.add(index_token).toString(),
                value: array_operation.value,
            };
            // padding++ // maybe only if array_operation.index > -1 ?
            return [operations.concat(operation), padding + 1];
        }
        else if (isArrayRemove(array_operation)) {
            var operation = {
                op: array_operation.op,
                path: ptr.add(String(array_operation.index + padding)).toString(),
            };
            // padding--
            return [operations.concat(operation), padding - 1];
        }
        else { // replace
            var replace_ptr = ptr.add(String(array_operation.index + padding));
            var replace_operations = diff(array_operation.original, array_operation.value, replace_ptr);
            return [operations.concat.apply(operations, replace_operations), padding];
        }
    }, [[], 0])[0];
    return padded_operations;
}
exports.diffArrays = diffArrays;
function diffObjects(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    // if a key is in input but not output -> remove it
    var operations = [];
    subtract(input, output).forEach(function (key) {
        operations.push({ op: 'remove', path: ptr.add(key).toString() });
    });
    // if a key is in output but not input -> add it
    subtract(output, input).forEach(function (key) {
        operations.push({ op: 'add', path: ptr.add(key).toString(), value: output[key] });
    });
    // if a key is in both, diff it recursively
    intersection([input, output]).forEach(function (key) {
        operations.push.apply(operations, diff(input[key], output[key], ptr.add(key)));
    });
    return operations;
}
exports.diffObjects = diffObjects;
function diffValues(input, output, ptr) {
    if (!equal_1.compare(input, output)) {
        return [{ op: 'replace', path: ptr.toString(), value: output }];
    }
    return [];
}
exports.diffValues = diffValues;
function diffAny(input, output, ptr, diff) {
    if (diff === void 0) { diff = diffAny; }
    var input_type = equal_1.objectType(input);
    var output_type = equal_1.objectType(output);
    if (input_type == 'array' && output_type == 'array') {
        return diffArrays(input, output, ptr, diff);
    }
    if (input_type == 'object' && output_type == 'object') {
        return diffObjects(input, output, ptr, diff);
    }
    // only pairs of arrays and objects can go down a path to produce a smaller
    // diff; everything else must be wholesale replaced if inequal
    return diffValues(input, output, ptr);
}
exports.diffAny = diffAny;


/***/ }),

/***/ "./node_modules/rfc6902/equal.js":
/*!***************************************!*\
  !*** ./node_modules/rfc6902/equal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasOwnProperty = Object.prototype.hasOwnProperty;
function objectType(object) {
    if (object === undefined) {
        return 'undefined';
    }
    if (object === null) {
        return 'null';
    }
    if (Array.isArray(object)) {
        return 'array';
    }
    return typeof object;
}
exports.objectType = objectType;
/**
Evaluate `left === right`, treating `left` and `right` as ordered lists.

@returns true iff `left` and `right` have identical lengths, and every element
         of `left` is equal to the corresponding element of `right`. Equality is
         determined recursivly, via `compare`.
*/
function compareArrays(left, right) {
    var length = left.length;
    if (length !== right.length) {
        return false;
    }
    for (var i = 0; i < length; i++) {
        if (!compare(left[i], right[i])) {
            return false;
        }
    }
    return true;
}
/**
Evaluate `left === right`, treating `left` and `right` as property maps.

@returns true iff every property in `left` has a value equal to the value of the
         corresponding property in `right`, and vice-versa, stopping as soon as
         possible. Equality is determined recursivly, via `compare`.
*/
function compareObjects(left, right) {
    var left_keys = Object.keys(left);
    var right_keys = Object.keys(right);
    var length = left_keys.length;
    // quick exit if the number of keys don't match up
    if (length !== right_keys.length) {
        return false;
    }
    // we don't know for sure that Set(left_keys) is equal to Set(right_keys),
    // much less that their values in left and right are equal, but if right
    // contains each key in left, we know it can't have any additional keys
    for (var i = 0; i < length; i++) {
        var key = left_keys[i];
        if (!hasOwnProperty.call(right, key) || !compare(left[key], right[key])) {
            return false;
        }
    }
    return true;
}
/**
`compare()` returns true if `left` and `right` are materially equal
(i.e., would produce equivalent JSON), false otherwise.

> Here, "equal" means that the value at the target location and the
> value conveyed by "value" are of the same JSON type, and that they
> are considered equal by the following rules for that type:
> o  strings: are considered equal if they contain the same number of
>    Unicode characters and their code points are byte-by-byte equal.
> o  numbers: are considered equal if their values are numerically
>    equal.
> o  arrays: are considered equal if they contain the same number of
>    values, and if each value can be considered equal to the value at
>    the corresponding position in the other array, using this list of
>    type-specific rules.
> o  objects: are considered equal if they contain the same number of
>    members, and if each member can be considered equal to a member in
>    the other object, by comparing their keys (as strings) and their
>    values (using this list of type-specific rules).
> o  literals (false, true, and null): are considered equal if they are
>    the same.
*/
function compare(left, right) {
    // strict equality handles literals, numbers, and strings (a sufficient but not necessary cause)
    if (left === right) {
        return true;
    }
    var left_type = objectType(left);
    var right_type = objectType(right);
    // check arrays
    if (left_type == 'array' && right_type == 'array') {
        return compareArrays(left, right);
    }
    // check objects
    if (left_type == 'object' && right_type == 'object') {
        return compareObjects(left, right);
    }
    // mismatched arrays & objects, etc., are always inequal
    return false;
}
exports.compare = compare;


/***/ }),

/***/ "./node_modules/rfc6902/index.js":
/*!***************************************!*\
  !*** ./node_modules/rfc6902/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/rfc6902/pointer.js");
var patch_1 = __webpack_require__(/*! ./patch */ "./node_modules/rfc6902/patch.js");
var diff_1 = __webpack_require__(/*! ./diff */ "./node_modules/rfc6902/diff.js");
/**
Apply a 'application/json-patch+json'-type patch to an object.

`patch` *must* be an array of operations.

> Operation objects MUST have exactly one "op" member, whose value
> indicates the operation to perform.  Its value MUST be one of "add",
> "remove", "replace", "move", "copy", or "test"; other values are
> errors.

This method mutates the target object in-place.

@returns list of results, one for each operation: `null` indicated success,
         otherwise, the result will be an instance of one of the Error classes:
         MissingError, InvalidOperationError, or TestError.
*/
function applyPatch(object, patch) {
    return patch.map(function (operation) { return patch_1.apply(object, operation); });
}
exports.applyPatch = applyPatch;
function wrapVoidableDiff(diff) {
    function wrappedDiff(input, output, ptr) {
        var custom_patch = diff(input, output, ptr);
        // ensure an array is always returned
        return Array.isArray(custom_patch) ? custom_patch : diff_1.diffAny(input, output, ptr, wrappedDiff);
    }
    return wrappedDiff;
}
/**
Produce a 'application/json-patch+json'-type patch to get from one object to
another.

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

`diff` is called on each pair of comparable non-primitive nodes in the
`input`/`output` object trees, producing nested patches. Return `undefined`
to fall back to default behaviour.

Returns list of operations to perform on `input` to produce `output`.
*/
function createPatch(input, output, diff) {
    var ptr = new pointer_1.Pointer();
    // a new Pointer gets a default path of [''] if not specified
    return (diff ? wrapVoidableDiff(diff) : diff_1.diffAny)(input, output, ptr);
}
exports.createPatch = createPatch;
/**
Create a test operation based on `input`'s current evaluation of the JSON
Pointer `path`; if such a pointer cannot be resolved, returns undefined.
*/
function createTest(input, path) {
    var endpoint = pointer_1.Pointer.fromJSON(path).evaluate(input);
    if (endpoint !== undefined) {
        return { op: 'test', path: path, value: endpoint.value };
    }
}
/**
Produce an 'application/json-patch+json'-type list of tests, to verify that
existing values in an object are identical to the those captured at some
checkpoint (whenever this function is called).

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

Returns list of test operations.
*/
function createTests(input, patch) {
    var tests = new Array();
    patch.filter(diff_1.isDestructive).forEach(function (operation) {
        var pathTest = createTest(input, operation.path);
        if (pathTest)
            tests.push(pathTest);
        if ('from' in operation) {
            var fromTest = createTest(input, operation.from);
            if (fromTest)
                tests.push(fromTest);
        }
    });
    return tests;
}
exports.createTests = createTests;


/***/ }),

/***/ "./node_modules/rfc6902/patch.js":
/*!***************************************!*\
  !*** ./node_modules/rfc6902/patch.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pointer_1 = __webpack_require__(/*! ./pointer */ "./node_modules/rfc6902/pointer.js");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/rfc6902/util.js");
var equal_1 = __webpack_require__(/*! ./equal */ "./node_modules/rfc6902/equal.js");
var MissingError = /** @class */ (function (_super) {
    __extends(MissingError, _super);
    function MissingError(path) {
        var _this = _super.call(this, "Value required at path: " + path) || this;
        _this.path = path;
        _this.name = 'MissingError';
        return _this;
    }
    return MissingError;
}(Error));
exports.MissingError = MissingError;
var TestError = /** @class */ (function (_super) {
    __extends(TestError, _super);
    function TestError(actual, expected) {
        var _this = _super.call(this, "Test failed: " + actual + " != " + expected) || this;
        _this.actual = actual;
        _this.expected = expected;
        _this.name = 'TestError';
        _this.actual = actual;
        _this.expected = expected;
        return _this;
    }
    return TestError;
}(Error));
exports.TestError = TestError;
function _add(object, key, value) {
    if (Array.isArray(object)) {
        // `key` must be an index
        if (key == '-') {
            object.push(value);
        }
        else {
            var index = parseInt(key, 10);
            object.splice(index, 0, value);
        }
    }
    else {
        object[key] = value;
    }
}
function _remove(object, key) {
    if (Array.isArray(object)) {
        // '-' syntax doesn't make sense when removing
        var index = parseInt(key, 10);
        object.splice(index, 1);
    }
    else {
        // not sure what the proper behavior is when path = ''
        delete object[key];
    }
}
/**
>  o  If the target location specifies an array index, a new value is
>     inserted into the array at the specified index.
>  o  If the target location specifies an object member that does not
>     already exist, a new member is added to the object.
>  o  If the target location specifies an object member that does exist,
>     that member's value is replaced.
*/
function add(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    // it's not exactly a "MissingError" in the same way that `remove` is -- more like a MissingParent, or something
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _add(endpoint.parent, endpoint.key, operation.value);
    return null;
}
exports.add = add;
/**
> The "remove" operation removes the value at the target location.
> The target location MUST exist for the operation to be successful.
*/
function remove(object, operation) {
    // endpoint has parent, key, and value properties
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.value === undefined) {
        return new MissingError(operation.path);
    }
    // not sure what the proper behavior is when path = ''
    _remove(endpoint.parent, endpoint.key);
    return null;
}
exports.remove = remove;
/**
> The "replace" operation replaces the value at the target location
> with a new value.  The operation object MUST contain a "value" member
> whose content specifies the replacement value.
> The target location MUST exist for the operation to be successful.

> This operation is functionally identical to a "remove" operation for
> a value, followed immediately by an "add" operation at the same
> location with the replacement value.

Even more simply, it's like the add operation with an existence check.
*/
function replace(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === null) {
        return new MissingError(operation.path);
    }
    // this existence check treats arrays as a special case
    if (Array.isArray(endpoint.parent)) {
        if (parseInt(endpoint.key, 10) >= endpoint.parent.length) {
            return new MissingError(operation.path);
        }
    }
    else if (endpoint.value === undefined) {
        return new MissingError(operation.path);
    }
    endpoint.parent[endpoint.key] = operation.value;
    return null;
}
exports.replace = replace;
/**
> The "move" operation removes the value at a specified location and
> adds it to the target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to move the value from.
> This operation is functionally identical to a "remove" operation on
> the "from" location, followed immediately by an "add" operation at
> the target location with the value that was just removed.

> The "from" location MUST NOT be a proper prefix of the "path"
> location; i.e., a location cannot be moved into one of its children.

TODO: throw if the check described in the previous paragraph fails.
*/
function move(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) {
        return new MissingError(operation.from);
    }
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _remove(from_endpoint.parent, from_endpoint.key);
    _add(endpoint.parent, endpoint.key, from_endpoint.value);
    return null;
}
exports.move = move;
/**
> The "copy" operation copies the value at a specified location to the
> target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to copy the value from.
> The "from" location MUST exist for the operation to be successful.

> This operation is functionally identical to an "add" operation at the
> target location using the value specified in the "from" member.

Alternatively, it's like 'move' without the 'remove'.
*/
function copy(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) {
        return new MissingError(operation.from);
    }
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) {
        return new MissingError(operation.path);
    }
    _add(endpoint.parent, endpoint.key, util_1.clone(from_endpoint.value));
    return null;
}
exports.copy = copy;
/**
> The "test" operation tests that a value at the target location is
> equal to a specified value.
> The operation object MUST contain a "value" member that conveys the
> value to be compared to the target location's value.
> The target location MUST be equal to the "value" value for the
> operation to be considered successful.
*/
function test(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    var result = equal_1.compare(endpoint.value, operation.value);
    if (!result) {
        return new TestError(endpoint.value, operation.value);
    }
    return null;
}
exports.test = test;
var InvalidOperationError = /** @class */ (function (_super) {
    __extends(InvalidOperationError, _super);
    function InvalidOperationError(operation) {
        var _this = _super.call(this, "Invalid operation: " + operation.op) || this;
        _this.operation = operation;
        _this.name = 'InvalidOperationError';
        return _this;
    }
    return InvalidOperationError;
}(Error));
exports.InvalidOperationError = InvalidOperationError;
/**
Switch on `operation.op`, applying the corresponding patch function for each
case to `object`.
*/
function apply(object, operation) {
    // not sure why TypeScript can't infer typesafety of:
    //   {add, remove, replace, move, copy, test}[operation.op](object, operation)
    // (seems like a bug)
    switch (operation.op) {
        case 'add': return add(object, operation);
        case 'remove': return remove(object, operation);
        case 'replace': return replace(object, operation);
        case 'move': return move(object, operation);
        case 'copy': return copy(object, operation);
        case 'test': return test(object, operation);
    }
    return new InvalidOperationError(operation);
}
exports.apply = apply;


/***/ }),

/***/ "./node_modules/rfc6902/pointer.js":
/*!*****************************************!*\
  !*** ./node_modules/rfc6902/pointer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
Unescape token part of a JSON Pointer string

`token` should *not* contain any '/' characters.

> Evaluation of each reference token begins by decoding any escaped
> character sequence.  This is performed by first transforming any
> occurrence of the sequence '~1' to '/', and then transforming any
> occurrence of the sequence '~0' to '~'.  By performing the
> substitutions in this order, an implementation avoids the error of
> turning '~01' first into '~1' and then into '/', which would be
> incorrect (the string '~01' correctly becomes '~1' after
> transformation).

Here's my take:

~1 is unescaped with higher priority than ~0 because it is a lower-order escape character.
I say "lower order" because '/' needs escaping due to the JSON Pointer serialization technique.
Whereas, '~' is escaped because escaping '/' uses the '~' character.
*/
function unescape(token) {
    return token.replace(/~1/g, '/').replace(/~0/g, '~');
}
/** Escape token part of a JSON Pointer string

> '~' needs to be encoded as '~0' and '/'
> needs to be encoded as '~1' when these characters appear in a
> reference token.

This is the exact inverse of `unescape()`, so the reverse replacements must take place in reverse order.
*/
function escape(token) {
    return token.replace(/~/g, '~0').replace(/\//g, '~1');
}
/**
JSON Pointer representation
*/
var Pointer = /** @class */ (function () {
    function Pointer(tokens) {
        if (tokens === void 0) { tokens = ['']; }
        this.tokens = tokens;
    }
    /**
    `path` *must* be a properly escaped string.
    */
    Pointer.fromJSON = function (path) {
        var tokens = path.split('/').map(unescape);
        if (tokens[0] !== '')
            throw new Error("Invalid JSON Pointer: " + path);
        return new Pointer(tokens);
    };
    Pointer.prototype.toString = function () {
        return this.tokens.map(escape).join('/');
    };
    /**
    Returns an object with 'parent', 'key', and 'value' properties.
    In the special case that this Pointer's path == "",
    this object will be {parent: null, key: '', value: object}.
    Otherwise, parent and key will have the property such that parent[key] == value.
    */
    Pointer.prototype.evaluate = function (object) {
        var parent = null;
        var key = '';
        var value = object;
        for (var i = 1, l = this.tokens.length; i < l; i++) {
            parent = value;
            key = this.tokens[i];
            // not sure if this the best way to handle non-existant paths...
            value = (parent || {})[key];
        }
        return { parent: parent, key: key, value: value };
    };
    Pointer.prototype.get = function (object) {
        return this.evaluate(object).value;
    };
    Pointer.prototype.set = function (object, value) {
        var cursor = object;
        for (var i = 1, l = this.tokens.length - 1, token = this.tokens[i]; i < l; i++) {
            // not sure if this the best way to handle non-existant paths...
            cursor = (cursor || {})[token];
        }
        if (cursor) {
            cursor[this.tokens[this.tokens.length - 1]] = value;
        }
    };
    Pointer.prototype.push = function (token) {
        // mutable
        this.tokens.push(token);
    };
    /**
    `token` should be a String. It'll be coerced to one anyway.
  
    immutable (shallowly)
    */
    Pointer.prototype.add = function (token) {
        var tokens = this.tokens.concat(String(token));
        return new Pointer(tokens);
    };
    return Pointer;
}());
exports.Pointer = Pointer;


/***/ }),

/***/ "./node_modules/rfc6902/util.js":
/*!**************************************!*\
  !*** ./node_modules/rfc6902/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
Recursively copy a value.

@param source - should be a JavaScript primitive, Array, or (plain old) Object.
@returns copy of source where every Array and Object have been recursively
         reconstructed from their constituent elements
*/
function clone(source) {
    // loose-equality checking for null is faster than strict checking for each of null/undefined/true/false
    // checking null first, then calling typeof, is faster than vice-versa
    if (source == null || typeof source != 'object') {
        // short-circuiting is faster than a single return
        return source;
    }
    // x.constructor == Array is the fastest way to check if x is an Array
    if (source.constructor == Array) {
        // construction via imperative for-loop is faster than source.map(arrayVsObject)
        var length_1 = source.length;
        // setting the Array length during construction is faster than just `[]` or `new Array()`
        var arrayTarget = new Array(length_1);
        for (var i = 0; i < length_1; i++) {
            arrayTarget[i] = clone(source[i]);
        }
        return arrayTarget;
    }
    // Object
    var objectTarget = {};
    // declaring the variable (with const) inside the loop is faster
    for (var key in source) {
        // hasOwnProperty costs a bit of performance, but it's semantically necessary
        // using a global helper is MUCH faster than calling source.hasOwnProperty(key)
        if (hasOwnProperty.call(source, key)) {
            objectTarget[key] = clone(source[key]);
        }
    }
    return objectTarget;
}
exports.clone = clone;


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "re-lui":
/*!*************************!*\
  !*** external "re-lui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("re-lui");

/***/ }),

/***/ "re-slide":
/*!***************************!*\
  !*** external "re-slide" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("re-slide");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-virtualized/dist/commonjs/CellMeasurer":
/*!***************************************************************!*\
  !*** external "react-virtualized/dist/commonjs/CellMeasurer" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/CellMeasurer");

/***/ }),

/***/ "react-virtualized/dist/commonjs/List":
/*!*******************************************************!*\
  !*** external "react-virtualized/dist/commonjs/List" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/List");

/***/ }),

/***/ "react-virtualized/dist/commonjs/MultiGrid":
/*!************************************************************!*\
  !*** external "react-virtualized/dist/commonjs/MultiGrid" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/dist/commonjs/MultiGrid");

/***/ })

/******/ });
//# sourceMappingURL=re-modelgrid.js.map