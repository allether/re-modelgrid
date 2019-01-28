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
        width: '400px'
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
              color: this.context.primary.color[0]
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
    return this.base = el;
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
    if (state.grid_w !== this.base.clientWidth || state.grid_h !== this.base.clientHeight) {
      state.grid_w = this.base.clientWidth;
      return state.grid_h = this.base.clientHeight;
    }
  }

  componentDidUpdate() {
    var ref;
    if (this.state.grid_w !== this.base.clientWidth || this.state.grid_h !== this.base.clientHeight) {
      log('update grid size', this.props.schema.name, this.base.clientHeight, this.base.clientWidth);
      return this.setState({
        force_update_grid: false,
        grid_w: this.base.clientWidth,
        grid_h: this.base.clientHeight
      });
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
    return h('div', {
      className: css['model-grid-wrap'],
      ref: this.baseRef
    }, method_menu || null, grid || null);
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
        color: this.context.primary.inv[1],
        background: this.context.primary.inv[0],
        width: '400px'
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
var AlertDot, AlertOverlay, Bar, CodeEditor, Color, Component, DIM, DIM_S, GridView, Input, JsonView, Menu, MenuTab, MenuView, ModelGrid, Overlay, Slide, StyleContext, cn, createElement, css, highlight, languages, rfc6902,
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
    this.hideQueryItemRunError = this.hideQueryItemRunError.bind(this);
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

  runDataItemMethod(method) {
    var prom;
    boundMethodCheck(this, ModelGrid);
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
    return prom.then((data_item) => {
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
      query_item_run_error_visible: false,
      action_error: {
        data_item: data_item,
        error: error
      }
    });
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
      return this.setState({
        split_vert: split_vert
      });
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
      vert: this.state.split_vert,
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
      i: this.state.editor_error && 'error' || 'error_outline',
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
      btn_type: 'flat',
      onClick: this.getDataItem
    }), h(Input, {
      type: 'button',
      i: 'close',
      btn_type: 'flat',
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
      dim: DIM,
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

/***/ "./node_modules/css-loader/index.js!./node_modules/prismjs/themes/prism-twilight.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/prismjs/themes/prism-twilight.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * prism.js Twilight theme\n * Based (more or less) on the Twilight theme originally of Textmate fame.\n * @author Remy Bach\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: white;\n\tbackground: none;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\ttext-shadow: 0 -.1em .2em black;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"],\n:not(pre) > code[class*=\"language-\"] {\n\tbackground: hsl(0, 0%, 8%); /* #141414 */\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tborder-radius: .5em;\n\tborder: .3em solid hsl(0, 0%, 33%); /* #282A2B */\n\tbox-shadow: 1px 1px .5em black inset;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tpadding: 1em;\n}\n\npre[class*=\"language-\"]::-moz-selection {\n\t/* Firefox */\n\tbackground: hsl(200, 4%, 16%); /* #282A2B */\n}\n\npre[class*=\"language-\"]::selection {\n\t/* Safari */\n\tbackground: hsl(200, 4%, 16%); /* #282A2B */\n}\n\n/* Text Selection colour */\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tborder-radius: .3em;\n\tborder: .13em solid hsl(0, 0%, 33%); /* #545454 */\n\tbox-shadow: 1px 1px .3em -.1em black inset;\n\tpadding: .15em .2em .05em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: hsl(0, 0%, 47%); /* #777777 */\n}\n\n.token.punctuation {\n\topacity: .7;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.tag,\n.token.boolean,\n.token.number,\n.token.deleted {\n\tcolor: hsl(14, 58%, 55%); /* #CF6A4C */\n}\n\n.token.keyword,\n.token.property,\n.token.selector,\n.token.constant,\n.token.symbol,\n.token.builtin {\n\tcolor: hsl(53, 89%, 79%); /* #F9EE98 */\n}\n\n.token.attr-name,\n.token.attr-value,\n.token.string,\n.token.char,\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable,\n.token.inserted {\n\tcolor: hsl(76, 21%, 52%); /* #8F9D6A */\n}\n\n.token.atrule {\n\tcolor: hsl(218, 22%, 55%); /* #7587A6 */\n}\n\n.token.regex,\n.token.important {\n\tcolor: hsl(42, 75%, 65%); /* #E9C062 */\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n\npre[data-line] {\n\tpadding: 1em 0 1em 3em;\n\tposition: relative;\n}\n\n/* Markup */\n.language-markup .token.tag,\n.language-markup .token.attr-name,\n.language-markup .token.punctuation {\n\tcolor: hsl(33, 33%, 52%); /* #AC885B */\n}\n\n/* Make the tokens sit above the line highlight so the colours don't look faded. */\n.token {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight {\n\tbackground: hsla(0, 0%, 33%, 0.25); /* #545454 */\n\tbackground: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */\n\tborder-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */\n\tborder-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */\n\tleft: 0;\n\tline-height: inherit;\n\tmargin-top: 0.75em; /* Same as .prism’s padding-top */\n\tpadding: inherit 0;\n\tpointer-events: none;\n\tposition: absolute;\n\tright: 0;\n\twhite-space: pre;\n\tz-index: 0;\n}\n\n.line-highlight:before,\n.line-highlight[data-end]:after {\n\tbackground-color: hsl(215, 15%, 59%); /* #8794A6 */\n\tborder-radius: 999px;\n\tbox-shadow: 0 1px white;\n\tcolor: hsl(24, 20%, 95%); /* #F5F2F0 */\n\tcontent: attr(data-start);\n\tfont: bold 65%/1.5 sans-serif;\n\tleft: .6em;\n\tmin-width: 1em;\n\tpadding: 0 .5em;\n\tposition: absolute;\n\ttext-align: center;\n\ttext-shadow: none;\n\ttop: .4em;\n\tvertical-align: .3em;\n}\n\n.line-highlight[data-end]:after {\n\tbottom: .4em;\n\tcontent: attr(data-end);\n\ttop: auto;\n}\n", ""]);

// exports


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
exports.push([module.i, ".lui-g-model-grid {\n  font-family: \"monor\";\n  font-size: 13px;\n  transform: translate(0);\n  height: 100%;\n  width: 100%;\n}\n.lui-g-model-grid ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 8px;\n  height: 8px;\n}\n.lui-g-model-grid ::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.lui-g-model-grid ::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background-color: #7F7F7F;\n  transition: background-color 0.3s ease;\n}\n.lui-g-model-grid ::-webkit-scrollbar-thumb:hover {\n  background-color: #8F8F8F;\n}\n.lui-g-model-grid-wrap {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-slash {\n  opacity: 0.4;\n  padding: 0 4;\n}\n.lui-g-model-grid-slash-right {\n  opacity: 0.4;\n  padding-right: 4;\n}\n.lui-g-model-grid-key-toggle {\n  width: 30px;\n  height: 30px;\n}\n.lui-g-model-grid-slide {\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-opaque {\n  opacity: 0.5;\n}\n.lui-g-model-grid-add-doc-form {\n  max-height: 300px;\n  height: fit-content;\n  overflow-y: scroll;\n}\n.lui-g-search-query-menu-search-label {\n  white-space: nowrap;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.lui-g-search-query-error {\n  color: red;\n  background: rgba(0, 0, 0, 0.5);\n}\n.lui-g-model-grid-label-float-right {\n  right: 10px;\n  position: absolute;\n}\n.lui-g-model-grid-search-bookmark-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-family: \"monor\";\n  opacity: 0.8;\n}\n.lui-g-model-grid-search-bookmark-item:hover {\n  opacity: 1;\n}\n.ReactVirtualized__Grid__innerScrollContainer {\n  min-width: 100%;\n}\n.lui-g-model-grid-cell-method-button {\n  width: 30px !important;\n}\n.lui-g-search-query-item-label2 {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  transform: scale(0.8);\n  max-width: 200px;\n  min-width: 20px;\n  min-height: 20px;\n}\n.lui-g-search-query-item-label2 .lui-g-search-query-error {\n  overflow-x: scroll;\n  overflow-y: visible;\n  padding: 5px;\n}\n.lui-g-search-query-item-label {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  opacity: 0.7;\n  padding: 8px;\n  padding-right: 14px;\n  right: 0;\n  top: 0;\n}\n.lui-g-search-query-item-label i {\n  font-size: 16px;\n  padding-right: 6px;\n}\n.lui-g-model-grid-search-query-l-item {\n  height: auto !important;\n  min-height: 30px;\n  font-family: \"monor\";\n}\n.lui-g-model-grid-search-query-l-item .lui-g-json {\n  position: relative;\n  min-height: 30px;\n  margin: 0;\n  overflow-wrap: break-word;\n  padding: 8px;\n  font-size: 11px;\n  color: grey;\n  cursor: pointer;\n  white-space: pre;\n}\n* {\n  outline: none;\n}\n.lui-g-menu-slide {\n  overflow: visible !important;\n}\n.lui-g-model-grid-cell-method-button {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 15 !important;\n  width: 30;\n  opacity: 0.2;\n  transition: opacity 0.3s;\n  cursor: pointer;\n}\n.lui-g-model-grid-cell-method-button:hover {\n  opacity: 1;\n}\n.lui-g-search-keys-container {\n  width: auto;\n  height: 230;\n  min-width: 200;\n  overflow-y: scroll;\n}\n.lui-g-search-query-menu-icon {\n  cursor: pointer;\n}\n.lui-g-search-query-menu-icon i {\n  margin: 0;\n}\n.lui-g-model-grid-search-query-view {\n  width: 400px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.lui-g-data-item-method-menu {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.lui-g-model-grid-key {\n  cursor: pointer;\n}\n.lui-g-model-grid-key .lui-g-model-grid-key-toggle {\n  opacity: 0.5;\n  transition: opacity 0.3s ease;\n  line-height: inherit;\n}\n.lui-g-model-grid-key:hover .lui-g-model-grid-key-toggle {\n  opacity: 1;\n}\n.lui-g-model-grid-key-toggle {\n  line-height: 30px;\n}\n.lui-g-model-grid-cell {\n  display: flex;\n  cursor: pointer;\n  height: 100%;\n  align-items: center;\n  vertical-align: middle;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  padding: 0px 10px;\n}\n.lui-g-model-grid-cell .lui-g-model-grid-label {\n  float: left;\n}\n.lui-g-model-grid-cell input {\n  font-family: \"monor\";\n  font-size: 13px;\n  margin-left: -10px;\n  transition: background 0.3s ease;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  outline: none;\n}\n.lui-g-model-grid-cell input::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.lui-g-react-json-wrap {\n  position: relative;\n  transform: translate(0);\n}\n.lui-g-react-json-container {\n  overflow: scroll;\n}\n.lui-g-react-json-container.lui-g-dark .number {\n  color: #ff7a00;\n}\n.lui-g-react-json-container.lui-g-dark .string {\n  color: #32e03f;\n}\n.lui-g-react-json-container.lui-g-dark .property {\n  color: #e7e7e7;\n}\n.lui-g-react-json-container.lui-g-dark .operator,\n.lui-g-react-json-container.lui-g-dark .punctuation {\n  color: #929292;\n}\n.lui-g-react-json-container.lui-g-light .number {\n  color: #a14e03;\n}\n.lui-g-react-json-container.lui-g-light .string {\n  color: #1c7122;\n}\n.lui-g-react-json-container.lui-g-light .property {\n  color: #121212;\n}\n.lui-g-react-json-container.lui-g-light .operator,\n.lui-g-react-json-container.lui-g-light .punctuation {\n  color: #878787;\n}\n.lui-g-json-editor-menu {\n  position: fixed !important;\n  height: fit-content !important;\n  width: fit-content !important;\n  bottom: 8px;\n  margin: 0px;\n  left: 0px;\n  right: unset;\n}\n.lui-g-json-editor-menu.lui-g-vert {\n  top: 0px;\n  right: 8px;\n  left: unset;\n}\n.lui-g-model-grid-list-menu-right {\n  width: 100%;\n  flex-shrink: 1 !important;\n  flex-direction: row-reverse;\n}\n.lui-g-model-grid-list-layout-button {\n  width: 140px;\n}\n.lui-g-methods-list-container {\n  overflow-y: scroll;\n  transform: translate(0px);\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  height: 170px;\n  width: 100%;\n  min-width: 400px;\n}\n.lui-g-overlay-label-button {\n  position: fixed !important;\n  margin: 12px !important;\n  left: 0 !important;\n  top: 0 !important;\n}\n.lui-g-overlay-label-button * {\n  color: inherit !important;\n}\n", ""]);

// exports
exports.locals = {
	"model-grid": "lui-g-model-grid",
	"model-grid-wrap": "lui-g-model-grid-wrap",
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
	"methods-list-container": "lui-g-methods-list-container",
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


var content = __webpack_require__(/*! !../../css-loader!./prism-twilight.css */ "./node_modules/css-loader/index.js!./node_modules/prismjs/themes/prism-twilight.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
//# sourceMappingURL=index.js.map