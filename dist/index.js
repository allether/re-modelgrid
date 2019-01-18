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
/******/ 	__webpack_require__.p = "/";
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

var Bar, CreateDocView, Input, Menu, MenuTab, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

CreateDocView = class CreateDocView extends Component {
  constructor() {
    super(...arguments);
    this.onNewDocFormInput = this.onNewDocFormInput.bind(this);
  }

  onNewDocFormInput(key_name, e) {
    boundMethodCheck(this, CreateDocView);
    this.props.new_doc[key_name] = e.target.value;
    return this.setState();
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
    }, props.keys_array.map((key_name, i) => {
      var key, key_val, override;
      if (!props.keys[key_name].form_render) {
        return null;
      }
      // log key_name
      override = null;
      if (filter_q && filter_q[key_name]) {
        override = filter_q[key_name];
      }
      key = props.keys[key_name];
      props.new_doc[key_name] = override || props.new_doc[key_name];
      key_val = props.new_doc[key_name];
      return h(Input, {
        key: i,
        label: key.label.padStart(lc + 4, " "),
        bar: true,
        disabled: override && true,
        required: key.form_required && true,
        is_valid: (typeof key.form_validate === "function" ? key.form_validate(key_val) : void 0) || void 0,
        value: override || key_val,
        onInput: this.onNewDocFormInput.bind(null, key_name),
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

var Bar, CELL_PAD, CHAR_W, DocumentMethodMenu, GridView, Input, InputCell, MAX_CHAR, Menu, MenuTab, MethodsView, MultiGrid, Overlay, Slide, StyleContext, cn, css,
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

DocumentMethodMenu = class DocumentMethodMenu extends Component {
  constructor(props) {
    super(props);
    this.runDataItemMethod = this.runDataItemMethod.bind(this);
    this.mapMenuMethodsButtons = this.mapMenuMethodsButtons.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.hideConfirmDelete = this.hideConfirmDelete.bind(this);
    this.state = {
      confirm_delete: false
    };
  }

  runDataItemMethod(method) {
    boundMethodCheck(this, DocumentMethodMenu);
    return this.props.runDataItemMethod(this.props.data_item, method);
  }

  mapMenuMethodsButtons(method, i) {
    var method_content;
    boundMethodCheck(this, DocumentMethodMenu);
    if (method.render) {
      method_content = h(MenuTab, {
        content: method.render(this.props.data_item)
      });
    }
    return h(MenuTab, {
      key: i,
      vert: true,
      content: h(Input, {
        onClick: this.props.runDataItemMethod.bind(method),
        type: 'button',
        i: method.render && 'subject' || 'play_arrow',
        label: [
          method.label,
          h('span',
          {
            className: css['model-grid-opaque']
          },
          String(method.name).padStart(MAX_CHAR))
        ]
      })
    }, method_content);
  }

  showMenu() {
    boundMethodCheck(this, DocumentMethodMenu);
    return this.setState({
      show_menu: true
    });
  }

  hideMenu() {
    boundMethodCheck(this, DocumentMethodMenu);
    return this.setState({
      show_menu: false
    });
  }

  confirmDelete() {
    boundMethodCheck(this, DocumentMethodMenu);
    return this.setState({
      confirm_delete: true
    });
  }

  hideConfirmDelete() {
    boundMethodCheck(this, DocumentMethodMenu);
    return this.setState({
      confirm_delete: false
    });
  }

  render() {
    return h(Menu, {
      vert: false,
      force_split_x: 1,
      force_split_y: 1,
      big: false,
      hover_reveal_enabled: false,
      backdrop_color: this.context.primary.inv[3],
      enable_backdrop: true,
      className: css['data-item-method-menu']
    }, h(MenuTab, {
      vert: true,
      show_backdrop: true,
      reveal: true,
      onClickBackdrop: this.props.onHide,
      tab_style: {
        width: '300px'
      },
      content: h(Input, {
        type: 'label',
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
              color: this.context.secondary.inv[0]
            }
          },
          this.props.data_item._label || this.props.data_item._id)
        ]
      })
    }, h(MenuTab, {
      content: h(Input, {
        type: 'button',
        i: 'code',
        onClick: this.props.showJSONView,
        label: 'edit JSON'
      })
    }), h(MenuTab, {
      key: 'del',
      vert: true,
      reveal: this.state.confirm_delete,
      show_backdrop: this.state.confirm_delete,
      onClick: this.confirmDelete,
      onClickBackdrop: this.hideConfirmDelete,
      content: h(Input, {
        type: 'button',
        i: 'delete',
        label: 'delete'
      })
    }, h(MenuTab, {
      content: h(Input, {
        i: 'delete',
        type: 'button',
        style: {
          background: this.context.primary.warn,
          color: 'white'
        },
        label: 'confirm',
        onClick: this.props.deleteDataItem
      })
    })), h(MethodsView, {
      methods: this.props.methods || this.props.schema.methods || [],
      runDataItemMethod: this.props.runDataItemMethod,
      data_item: this.props.data_item
    })));
  }

};

DocumentMethodMenu.contextType = StyleContext;

GridView = class GridView extends Component {
  constructor(props) {
    super(props);
    this.gridRef = this.gridRef.bind(this);
    this.slideRef = this.slideRef.bind(this);
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

  slideRef(el) {
    boundMethodCheck(this, GridView);
    return this._grid_slide = el;
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
      g_opts.style.width = '100%';
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
      return state.force_update_grid = true;
    }
  }

  componentDidUpdate() {
    var ref;
    // log 'did update'
    if (this._grid_slide._outer.clientWidth !== this.state.grid_w || this._grid_slide._outer.clientHeight !== this.state.grid_h) {
      return this.setState({
        grid_w: this._grid_slide._outer.clientWidth || 0,
        grid_h: this._grid_slide._outer.clientHeight || 0
      });
    } else if (this.state.force_update_grid && this._grid) {
      this.state.force_update_grid = false;
      // log 'recomputing GridView _grid'
      if ((ref = this._grid) != null) {
        ref.recomputeGridSize();
      }
      return this.forceUpdate();
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

  // return 30
  render() {
    var data, grid, method_menu, query_item, schema;
    schema = this.props.schema;
    data = this.props.data;
    query_item = this.props.query_item;
    if (this.state.show_method_menu) {
      method_menu = h(DocumentMethodMenu, {
        g_opts: this.state.data_item_g_opts,
        methods: this.props.methods,
        onHide: this.hideMethodMenu,
        showJSONView: this.props.showJSONView,
        deleteDataItem: this.props.deleteDataItem,
        runDataItemMethod: this.props.runDataItemMethod,
        data_item: this.props.data_item,
        schema: this.props.schema
      });
    }
    if (this._grid_slide) {
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
        rowHeight: this.rowHeight,
        rowCount: data.length + 1,
        width: this.state.grid_w
      });
    }
    return h(Slide, {
      beta: 100,
      ref: this.slideRef
    }, grid || null, method_menu || null);
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
      } else if (val === 'true' || val === 'false') {
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

var Bar, Input, LayoutsView, MAX_CHAR, Menu, MenuTab, Slide, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MAX_CHAR = 32;

LayoutsView = class LayoutsView extends Component {
  constructor(props) {
    super(props);
    this.onSelectKey = this.onSelectKey.bind(this);
    // @forceUpdate()
    this.setNewLayoutNameValue = this.setNewLayoutNameValue.bind(this);
    this.setNewLayoutKeysValue = this.setNewLayoutKeysValue.bind(this);
    this.showNewLayoutForm = this.showNewLayoutForm.bind(this);
    this.hideNewLayoutForm = this.hideNewLayoutForm.bind(this);
    this.submitNewLayoutForm = this.submitNewLayoutForm.bind(this);
    this.mapMenuLayoutButtons = this.mapMenuLayoutButtons.bind(this);
  }

  onSelectKey(key_name) {
    var k_i, key_arr;
    boundMethodCheck(this, LayoutsView);
    key_arr = [].concat(this.props.query_item.layout_keys);
    k_i = key_arr.indexOf(key_name);
    if (k_i >= 0) {
      key_arr.splice(k_i, 1);
    } else {
      key_arr.push(key_name);
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

  renderForm() {
    var sorted_keys;
    sorted_keys = this.props.keys_array.concat([]);
    sorted_keys.sort((k, pk) => {
      var ki, pki;
      ki = this.props.query_item.layout_keys.indexOf(k);
      pki = this.props.query_item.layout_keys.indexOf(pk);
      if (ki === -1 && pki >= 0) {
        return 1000;
      } else if (pki === -1 && ki >= 0) {
        return -1000;
      } else {
        return ki - pki;
      }
    });
    return [
      
      // sorted_keys = sorted_keys.map (key_name)=>
      // 	key_index = @props.query_item.layout_keys.indexOf(key_name)
      h(MenuTab,
      {
        className: css['methods-list-container'],
        key: 1,
        tab_style: {
          background: this.context.primary.inv[0]
        },
        content: h(Bar,
      {
          vert: true
        },
      sorted_keys.map((key_name) => {
          var key_index;
          key_index = this.props.query_item.layout_keys.indexOf(key_name);
          return h(MenuTab,
      {
            key: key_name,
            content: h(Input,
      {
              type: 'button',
              onClick: this.onSelectKey.bind(this,
      key_name),
              btn_type: key_index >= 0 && 'primary' || 'flat',
              label: [String(key_index >= 0 ? key_index : '').padEnd(4),
      this.props.keys[key_name].label]
            })
          });
        }))
      }),
      // h 'span',{className: css['model-grid-opaque']},String(@props.keys[key_name].label).padStart(10)
      h(MenuTab,
      {
        key: 2,
        content: h(Input,
      {
          type: 'text',
          onInput: this.setNewLayoutKeysValue,
          value: JSON.stringify(this.props.query_item.layout_keys),
          placeholder: '[keys]'
        })
      })
    ];
  }

  
  // onClickBackdrop: (e)=>
  // 	@props.onHide(e)

  // 	@props.runQuery()
  // label: '[keys]'
  render() {
    var form_tab, tab_options;
    tab_options = {
      vert: true,
      big: false,
      force_split_x: -1,
      force_bar_dir_x: -1,
      force_split_y: 1,
      orce_bar_dir_y: 1,
      onClick: this.props.onClick,
      onClickBackdrop: this.props.onHide,
      reveal: this.props.reveal,
      show_backdrop: this.props.reveal,
      content: h(Input, {
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

    // mapMenuFilterButtons: (filter,i)=>
    // 	h MenuTab,
    // 		key: i
    // 		content: h Input,
    // 			# onClick: @togglePinMenu.bind(@,'layout')
    // 			onClick: @props.onSelectFilter.bind(null,filter)
    // 			type: 'button'
    // 			label: filter.label
    this.togglePinMenu = this.togglePinMenu.bind(this);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      menu_backdrop: false,
      // selected_layout_index: 0
      // selected_filter_index: 0
      show_search_query_helper: false,
      show_new_layout_form: false,
      pin_menu_name: null,
      menu_backdrop: false,
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
      pin_menu_name: pin_menu_name,
      menu_backdrop: toggle
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
    }, h(MethodsView, {
      data_item: this.props.data_item,
      methods: schema.statics,
      runDataItemMethod: this.props.runStaticMethod
    }));
    // ADD NEW DOCUMENT TAB / VIEW
    new_doc_tab = h(CreateDocView, {
      reveal: this.getPinMenuBoolean('add-doc', true),
      keys: schema.keys,
      filter: props.filter,
      schema: schema,
      new_doc: props.new_doc,
      keys_array: schema.keys_array,
      onClick: this.togglePinMenu.bind(this, 'add-doc', true),
      onHide: this.togglePinMenu.bind(this, null, false),
      createDataItem: props.createDataItem
    });
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
      dim: 40,
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

var Bar, Input, MAX_CHAR, Menu, MenuTab, MethodsView, StyleContext, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

MAX_CHAR = 31;

MethodsView = class MethodsView extends Component {
  constructor(props) {
    super(props);
    this.onMethodClick = this.onMethodClick.bind(this);
    this.hideMethodRender = this.hideMethodRender.bind(this);
    this.mapMethods = this.mapMethods.bind(this);
    this.state = {
      render_method: null
    };
  }

  onMethodClick(method) {
    boundMethodCheck(this, MethodsView);
    if (method.render) {
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
      render_method: null
    });
  }

  mapMethods(method, i) {
    boundMethodCheck(this, MethodsView);
    if (this.state.render_method != null) {
      if (this.state.render_method !== method) {
        return null;
      }
    }
    return h(MenuTab, {
      key: i,
      onClickBackdrop: this.hideMethodRender,
      show_backdrop: this.state.render_method === method && true || false,
      backdrop_color: this.context.primary.inv[3],
      content: h(Input, {
        onClick: this.onMethodClick.bind(this, method),
        type: this.state.render_method === method && 'label' || 'button',
        select: this.state.render_method === method,
        btn_type: 'flat',
        i: method.icon || (method.render && 'subject' || 'play_arrow'),
        label: method.label
      })
    });
  }

  render() {
    var method_rendered, method_tabs, tab_props;
    method_tabs = this.props.methods.map(this.mapMethods);
    if (this.state.render_method) {
      this.state.render_method.post_body = this.state.render_method.post_body || {};
      method_rendered = this.state.render_method.render(this.state.render_method, this.state.render_method.post_body);
    }
    tab_props = {
      tab_style: {
        background: this.context.primary.inv[0],
        width: '300px'
      },
      content: h('div', {
        className: css['methods-list-container']
      }, h(Bar, {
        style: {
          width: '100%'
        },
        vert: true
      }, method_tabs)),
      reveal: this.state.render_method && true || false,
      onClickBackdrop: this.hideMethodRender,
      backdrop_color: this.context.primary.inv[3],
      show_backdrop: this.state.render_method && true || false
    };
    // method_tabs.push h 'span',{},props.methods.length+' methods'
    if (method_rendered) {
      return h(MenuTab, tab_props, method_rendered);
    } else {
      return h(MenuTab, tab_props);
    }
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
var AlertOverlay, Bar, Component, DIM, DIM_S, GridView, Input, Menu, MenuTab, MenuView, ModelGrid, Overlay, ReactJson, Slide, StyleContext, cn, createElement, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({createElement, Component} = __webpack_require__(/*! react */ "react"));

global.h = createElement;

global.Component = Component;

Slide = __webpack_require__(/*! re-slide */ "re-slide");

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

({Input, MenuTab, Menu, Bar, Overlay, AlertOverlay, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

// require 'colors'
ReactJson = __webpack_require__(/*! react-json-view */ "react-json-view");

ReactJson = ReactJson.default;

DIM = 40;

DIM_S = 30;

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
    this.clearQueryItemRunError = this.clearQueryItemRunError.bind(this);
    this.setQueryItemRunError = this.setQueryItemRunError.bind(this);
    this.mapDataItems = this.mapDataItems.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.runStaticMethod = this.runStaticMethod.bind(this);
    this.runDataItemMethod = this.runDataItemMethod.bind(this);
    this.setActionMethodError = this.setActionMethodError.bind(this);
    this.setActionStaticError = this.setActionStaticError.bind(this);
    this.clearActionQueryError = this.clearActionQueryError.bind(this);
    this.createDataItem = this.createDataItem.bind(this);
    this.deleteDataItem = this.deleteDataItem.bind(this);
    this.updateDataItem = this.updateDataItem.bind(this);
    this.getDataItem = this.getDataItem.bind(this);
    // getChildContext: ->
    // 	gridHeight: @base?.clientHeight - (@props.show_bar && DIM || 0)
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    
    // log state.data_item,state.show_json_view && state.action_query.data_item_id != state.data_item._id
    this.showJSONView = this.showJSONView.bind(this);
    
    this.closeJSONView = this.closeJSONView.bind(this);
    this.onJSONViewEdit = this.onJSONViewEdit.bind(this);
    // onJSONViewAdd: (opts)=>
    // 	upd_obj = {}
    // 	if opts.namespace.length
    // 		upd_key = opts.namespace.join('.')+'.'+opts.name
    // 	else
    // 		upd_key = opts.name
    // 	upd_obj[upd_key] = opts.new_value
    // 	@updateDataItem upd_obj
    this.onJSONViewDelete = this.onJSONViewDelete.bind(this);
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
      updateSelectedDocument: this.updateSelectedDocument
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
    this.log('update query items');
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
    // log 'reset label'
    keys = Object.keys(query_item.value);
    query_item.label = void 0;
    // if @props.filter
    // 	filter_keys = Object.keys(@props.filter.query_value)
    // else
    // 	filter_keys = []
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
    var error, q_value;
    if (query_item.type === 'key') {
      q_value = {};
      query_item.error = null;
      q_value[query_item.key || query_item.key] = query_item.input_value;
      return query_item.value = q_value;
    } else if (query_item.type === 'json') {
      try {
        query_item.value = JSON.parse(query_item.input_value);
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
    // log schema
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

  clearQueryItemRunError() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      query_item_run_error: null
    });
  }

  setQueryItemRunError(query_item, error) {
    boundMethodCheck(this, ModelGrid);
    query_item.error = error.message;
    query_item.completed_at = Date.now();
    return this.setState({
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
      this.log('runQuery completed', this.state.query_item._id, (this.state.query_item.completed_at - this.state.query_item.called_at) + 'ms', '#' + data.length);
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
    
    // log prom
    return prom.then((method_res) => {
      // log 'ran method',@state.data_item._label,'/',method.name,
      this.state.action_query.completed_at = Date.now();
      return this.runQuery();
    }).catch(this.setActionStaticError);
  }

  runDataItemMethod(method) {
    var prom;
    boundMethodCheck(this, ModelGrid);
    // log 'run data_item method',method
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
    // log prom
    return prom.then((data_item) => {
      // log 'ran method',@state.data_item._label,'/',method.name,
      this.state.action_query.completed_at = Date.now();
      this.setState({
        data_item: Object.assign({}, data_item)
      });
      return this.runQuery();
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  setActionMethodError(data_item, error) {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      action_error: {
        data_item: data_item,
        error: error
      }
    });
  }

  setActionStaticError(error) {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
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
    this.log('create data item');
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
    this.log('delete data item');
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        action: 'delete',
        called_at: Date.now()
      }
    });
    // data_item = @state.data_item
    return this.props.deleteDataItem(this.state.data_item._id).then((deleted_doc_id) => {
      this.log('deleted data_item', deleted_doc_id);
      this.state.action_query.completed_at = Date.now();
      if (this.state.data_item._id === deleted_doc_id) {
        this.setState({
          data_item: null
        });
      }
      return this.runQuery();
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  updateDataItem(update) {
    boundMethodCheck(this, ModelGrid);
    if (!this.state.action_query.completed_at && this.state.action_query.called_at) {
      return;
    }
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        body: update,
        action: 'update',
        called_at: Date.now()
      }
    });
    return this.props.updateDataItem(this.state.data_item._id, update).then((doc) => {
      this.log('updated data_item', doc);
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
      this.log('got data_item', doc);
      this.state.action_query.completed_at = Date.now();
      if (this.state.data_item._id === doc._id) {
        return this.setState({
          data_item: doc
        });
      }
    // @runQuery()
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
    var base, save_state;
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
      return this.getDataItem();
    }
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
      return state.show_json_view = false;
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

  onJSONViewEdit(opts) {
    var upd_key, upd_obj;
    boundMethodCheck(this, ModelGrid);
    upd_obj = {};
    if (opts.namespace.length) {
      upd_key = opts.namespace.join('.') + '.' + opts.name;
    } else {
      upd_key = opts.name;
    }
    upd_obj = {
      $set: {}
    };
    upd_obj['$set'][upd_key] = opts.new_value;
    return this.updateDataItem(upd_obj);
  }

  onJSONViewDelete(opts) {
    var upd_key, upd_obj;
    boundMethodCheck(this, ModelGrid);
    upd_obj = {};
    if (opts.namespace.length) {
      upd_key = opts.namespace.join('.') + '.' + opts.name;
    } else {
      upd_key = opts.name;
    }
    upd_obj = {
      $unset: {}
    };
    upd_obj['$unset'][upd_key] = true;
    return this.updateDataItem(upd_obj);
  }

  baseRef(slide) {
    boundMethodCheck(this, ModelGrid);
    return this.base = (slide != null ? slide._outer : void 0) || void 0;
  }

  // log @base
  render() {
    var overlay, ref, ref1, vert_json_bar;
    window.g = this;
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
    vert_json_bar = (this.base && this.base.clientHeight > this.base.clientWidth) ? true : false;
    if (this.state.query_item_run_error) {
      overlay = h(AlertOverlay, {
        initial_visible: false,
        alert_type: 'error',
        visible: true,
        backdrop_color: this.context.primary.inv[2],
        message: this.state.query_item_run_error.error.message,
        onClick: this.clearQueryItemRunError,
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
        type: 'label',
        label: [
          this.state.action_query.data_item_label || this.state.action_query.data_item_id,
          h('span',
          {
            key: 2,
            className: css['model-grid-slash']
          },
          '/'),
          h('span',
          {
            key: 1,
            style: {
              fontWeight: 600,
              color: this.context.primary.color[0]
            }
          },
          this.state.action_query.action)
        ]
      }));
    }
    return h(Slide, {
      ref: this.baseRef,
      slide: true,
      className: css['model-grid'],
      pos: !this.state.show_json_view && 1 || 0,
      vert: vert_json_bar,
      outerStyle: {
        transform: 'translate(0px)'
      },
      outerChildren: overlay
    }, h(Slide, {
      beta: 50,
      className: css['react-json-wrap']
    }, this.state.show_json_view && this.state.data_item && h(ReactJson, {
      iconStyle: 'circle',
      displayDataTypes: false,
      enableClipboard: true,
      name: false,
      collapseStringsAfterLength: 100,
      onEdit: this.onJSONViewEdit,
      onAdd: this.onJSONViewEdit,
      onDelete: this.onJSONViewDelete,
      shouldCollapse: this.shouldCollapse,
      theme: 'eighties',
      src: this.state.data_item
    }), h(Bar, {
      big: false,
      className: cn(css['json-editor-menu'], css[!vert_json_bar && 'vert']),
      vert: !vert_json_bar
    }, h(Input, {
      type: 'button',
      btn_type: 'flat',
      i: 'refresh',
      onClick: this.getDataItem
    }), h(Input, {
      type: 'button',
      btn_type: 'flat',
      i: 'close',
      onClick: this.closeJSONView
    }))), h(Slide, {
      vert: true,
      style: {
        transform: 'translate(0px)'
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

var Bar, CellMeasurer, CellMeasurerCache, Input, JsonView, List, MAX_CHAR, Menu, MenuTab, SearchView, Slide, SquareLoader, StyleContext, cn, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, SquareLoader, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

JsonView = __webpack_require__(/*! ./JsonView.coffee */ "./components/JsonView.coffee");

({List} = __webpack_require__(/*! react-virtualized/dist/commonjs/List */ "react-virtualized/dist/commonjs/List"));

({CellMeasurer, CellMeasurerCache} = __webpack_require__(/*! react-virtualized/dist/commonjs/CellMeasurer */ "react-virtualized/dist/commonjs/CellMeasurer"));

MAX_CHAR = 32;

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
    this.mapMenuSearchKeys = this.mapMenuSearchKeys.bind(this);
    this.showView = this.showView.bind(this);
    this.hideView = this.hideView.bind(this);
    this.showInfoOptions = this.showInfoOptions.bind(this);
    this.hideInfoOptions = this.hideInfoOptions.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.searchRef = this.searchRef.bind(this);
    window.sq = this;
    this.state = {
      query_item: props.query_item,
      show_info_options: false,
      query_item_label: null
    };
  }

  onFocus() {
    boundMethodCheck(this, SearchView);
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
    return this.props.runQuery();
  }

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
        key: !is_selected && this.context.primary.color[0] || this.context.secondary.inv[0],
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
      width: 300,
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
      width: 300,
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
    if (e.code === 'Escape') {
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

  render() {
    var bar_style, info_bar, info_btn_type, info_fn, info_i, info_label, info_options, info_type, l_q_i, l_q_l, pad_label, props, qi, query_item_is_loading, query_list, query_tab_height, search_i, search_input, search_input_label, search_input_label_value, search_placeholder, state, suggest;
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
      info_label = qi.error || 'json: ok';
      info_i = 'notifications';
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
      btn_type: 'flat',
      style: {
        paddingLeft: 0,
        background: 'none',
        color: qi.type === 'json' && this.context.secondary.color[2] || this.context.primary.color[0],
        width: 260
      },
      value: qi.input_value,
      bar_style: bar_style,
      onInput: this.setSearchValue,
      onEnter: this.onSearchEnter,
      bar: true,
      onClick: search_input_label && props.onClick,
      placeholder: search_placeholder
    }, search_input_label_value);
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
        width: 300,
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
        width: 300
      },
      bar_style: {
        width: 300
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
      }, search_i, search_input),
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./components/ModelGrid.less":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/less-loader/dist/cjs.js!./components/ModelGrid.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lui-2AHD- {\n  font-family: \"monor\";\n  font-size: 13px;\n  height: 100%;\n  width: 100%;\n}\n.lui-2AHD- ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 8px;\n  height: 8px;\n}\n.lui-2AHD- ::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.lui-2AHD- ::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background-color: #7F7F7F;\n  transition: background-color 0.3s ease;\n}\n.lui-2AHD- ::-webkit-scrollbar-thumb:hover {\n  background-color: #8F8F8F;\n}\n.lui-2jxDq {\n  opacity: 0.4;\n  padding: 0 4;\n}\n.lui-2NWoF {\n  opacity: 0.4;\n  padding-right: 4;\n}\n.lui-2S7gN {\n  width: 30px;\n  height: 30px;\n}\n.lui-3exNq {\n  width: 100%;\n  height: 100%;\n}\n.lui-2Oig8 {\n  opacity: 0.5;\n}\n.lui-1Wnc8 {\n  max-height: 300px;\n  height: fit-content;\n  overflow-y: scroll;\n}\n.lui-eFoi1 {\n  white-space: nowrap;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.lui-2-Riw {\n  color: red;\n}\n.lui-3HzB1 {\n  right: 10px;\n  position: absolute;\n}\n.lui-3lJiS {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-family: \"monor\";\n  opacity: 0.8;\n}\n.lui-3lJiS:hover {\n  opacity: 1;\n}\n.ReactVirtualized__Grid__innerScrollContainer {\n  min-width: 100%;\n}\n.lui-2hSbl {\n  width: 30px !important;\n}\n.lui-22qIa {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  transform: scale(0.8);\n  max-width: 200px;\n  min-width: 20px;\n  min-height: 20px;\n}\n.lui-22qIa .lui-2-Riw {\n  overflow-x: scroll;\n  overflow-y: visible;\n  padding: 5px;\n}\n.lui-1dCqE {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  opacity: 0.7;\n  padding: 8px;\n  padding-right: 14px;\n  right: 0;\n  top: 0;\n}\n.lui-1dCqE i {\n  font-size: 16px;\n  padding-right: 6px;\n}\n.lui-3-5T7 {\n  height: auto !important;\n  min-height: 30px;\n  font-family: \"monor\";\n}\n.lui-3-5T7 .lui-24gT1 {\n  position: relative;\n  min-height: 30px;\n  margin: 0;\n  overflow-wrap: break-word;\n  padding: 8px;\n  font-size: 11px;\n  color: grey;\n  cursor: pointer;\n  white-space: pre;\n}\n* {\n  outline: none;\n}\n.lui-1-PvV {\n  overflow: visible !important;\n}\n.lui-2hSbl {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 15 !important;\n  width: 30;\n  opacity: 0.2;\n  transition: opacity 0.3s;\n  cursor: pointer;\n}\n.lui-2hSbl:hover {\n  opacity: 1;\n}\n.lui-4gr2j {\n  width: auto;\n  height: 230;\n  min-width: 200;\n  overflow-y: scroll;\n}\n.lui-3K2EQ {\n  cursor: pointer;\n}\n.lui-3K2EQ i {\n  margin: 0;\n}\n.lui-P8ljS {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.lui-1w7qC {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.lui-2X1G6 {\n  cursor: pointer;\n}\n.lui-2X1G6 .lui-2S7gN {\n  opacity: 0.5;\n  transition: opacity 0.3s ease;\n  line-height: inherit;\n}\n.lui-2X1G6:hover .lui-2S7gN {\n  opacity: 1;\n}\n.lui-2S7gN {\n  line-height: 30px;\n}\n.lui-3vBBz {\n  position: fixed !important;\n  width: fit-content;\n  bottom: 8px;\n  left: 0px;\n  right: unset;\n}\n.lui-3vBBz.lui-bPIzo {\n  height: fit-content;\n  top: 0px;\n  right: 8px;\n  left: unset;\n}\n.lui-bVM3E {\n  display: flex;\n  cursor: pointer;\n  height: 100%;\n  align-items: center;\n  vertical-align: middle;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  padding: 0px 10px;\n}\n.lui-bVM3E .lui-2PbsQ {\n  float: left;\n}\n.lui-bVM3E input {\n  font-family: \"monor\";\n  font-size: 13px;\n  margin-left: -10px;\n  transition: background 0.3s ease;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  outline: none;\n}\n.lui-bVM3E input::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.lui-1dXoa {\n  position: relative;\n  transform: translate(0);\n}\n.lui-1dXoa .react-json-view {\n  overflow: scroll !important;\n  padding: 12px !important;\n  white-space: nowrap;\n  width: 100%;\n  height: 100%;\n  font-family: \"monor\" !important;\n}\n.lui-1dXoa .react-json-view * {\n  font-size: 13px !important;\n  vertical-align: top;\n}\n.lui-llMOW {\n  width: 100%;\n  flex-shrink: 1 !important;\n  flex-direction: row-reverse;\n}\n.lui-36sov {\n  width: 140px;\n}\n.lui-1mNiI {\n  overflow-y: scroll;\n  transform: translate(0px);\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  height: 170px;\n  width: 100%;\n  min-width: 300px;\n}\n", ""]);

// exports
exports.locals = {
	"model-grid": "lui-2AHD-",
	"model-grid-slash": "lui-2jxDq",
	"model-grid-slash-right": "lui-2NWoF",
	"model-grid-key-toggle": "lui-2S7gN",
	"model-grid-slide": "lui-3exNq",
	"model-grid-opaque": "lui-2Oig8",
	"model-grid-add-doc-form": "lui-1Wnc8",
	"search-query-menu-search-label": "lui-eFoi1",
	"search-query-error": "lui-2-Riw",
	"model-grid-label-float-right": "lui-3HzB1",
	"model-grid-search-bookmark-item": "lui-3lJiS",
	"model-grid-cell-method-button": "lui-2hSbl",
	"search-query-item-label2": "lui-22qIa",
	"search-query-item-label": "lui-1dCqE",
	"model-grid-search-query-l-item": "lui-3-5T7",
	"json": "lui-24gT1",
	"menu-slide": "lui-1-PvV",
	"search-keys-container": "lui-4gr2j",
	"search-query-menu-icon": "lui-3K2EQ",
	"model-grid-search-query-view": "lui-P8ljS",
	"data-item-method-menu": "lui-1w7qC",
	"model-grid-key": "lui-2X1G6",
	"json-editor-menu": "lui-3vBBz",
	"vert": "lui-bPIzo",
	"model-grid-cell": "lui-bVM3E",
	"model-grid-label": "lui-2PbsQ",
	"react-json-wrap": "lui-1dXoa",
	"model-grid-list-menu-right": "lui-llMOW",
	"model-grid-list-layout-button": "lui-36sov",
	"methods-list-container": "lui-1mNiI"
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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "react-json-view":
/*!**********************************!*\
  !*** external "react-json-view" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-json-view");

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
//# sourceMappingURL=index.js.map