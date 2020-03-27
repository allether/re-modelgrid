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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/ModelGrid.coffee");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GridView.coffee":
/*!************************************!*\
  !*** ./components/GridView.coffee ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, CELL_PAD, CHAR_W, GridView, Input, InputCell, MAX_CHAR, MAX_COL_WIDTH, Menu, MenuTab, MoveGuide, MultiGrid, Overlay, Slide, StyleContext, _, cn, css, hotkeys,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({MultiGrid} = __webpack_require__(/*! react-virtualized/dist/commonjs/MultiGrid */ "react-virtualized/dist/commonjs/MultiGrid"));

cn = __webpack_require__(/*! classnames */ "classnames");

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, Overlay, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

// MethodsView = require './MethodsView.coffee'
hotkeys = __webpack_require__(/*! hotkeys-js */ "hotkeys-js").default;

_ = __webpack_require__(/*! lodash */ "lodash");

CHAR_W = 7.8;

CELL_PAD = 10;

MAX_CHAR = 32;

MAX_COL_WIDTH = 1000;

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

MoveGuide = class MoveGuide extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = this.wrapperRef.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.state = {
      left: 0,
      width: 0,
      min_width: 0,
      start_move_x: props.clientX,
      start_move_width: props.move_key._c_w,
      width: props.move_key._c_w,
      left: props.move_key._left - props.scroll_left
    };
  }

  wrapperRef(el) {
    boundMethodCheck(this, MoveGuide);
    if (!el) {
      return;
    }
    this._wrapper = el;
    return this._rect = this._wrapper.getBoundingClientRect();
  }

  onMouseDown(e) {
    boundMethodCheck(this, MoveGuide);
    this.state.start_move_x = e.clientX;
    return this.state.start_move_width = this.props.move_key.col_width;
  }

  onMouseMove(e) {
    var left, min, width;
    boundMethodCheck(this, MoveGuide);
    left = this.props.move_key._left - this.props.scroll_left;
    width = this.state.start_move_width + (e.clientX - this.state.start_move_x);
    min = this.props.move_key.min_width || 100;
    width = Math.max(Math.min(width, MAX_COL_WIDTH), min);
    this.setState({
      left: left,
      width: width,
      min_width: width <= Math.max(min, this.props.move_key.col_width) || width === MAX_COL_WIDTH
    });
    return this.props.onMove(this.props.move_key, width);
  }

  onMouseUp(e) {
    boundMethodCheck(this, MoveGuide);
    return this.props.onMoveDone(this.props.move_key, this.state.width);
  }

  render() {
    var key_name, label, label_string, max_l, v_w;
    label = this.props.move_key.label;
    key_name = this.props.move_key._name;
    v_w = label.length * CHAR_W + CELL_PAD * 2 + 70;
    max_l = Math.floor((this.state.width - CELL_PAD * 2 - 70) / CHAR_W);
    if (v_w > this.state.width) {
      if (max_l <= 2) {
        label_string = '';
      } else {
        label_string = label.substring(0, max_l - 2) + '..';
      }
    } else {
      label_string = label;
    }
    return h('div', {
      className: css['move-guide-wrapper'],
      ref: this.wrapperRef,
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onMouseMove,
      onMouseUp: this.onMouseUp
    }, h('div', {
      className: css['move-guide'],
      style: {
        borderRight: '2px solid ' + this.context.primary.inv[2],
        transform: 'translate(' + this.state.left + 'px,' + 0 + 'px)',
        background: this.state.min_width && "rgba(255,255,0,0.5)" || "rgba(255,255,255,0.5)",
        width: this.state.width
      }
    }));
  }

};

MoveGuide.contextType = StyleContext;

GridView = class GridView extends Component {
  constructor(props) {
    super(props);
    this.gridRef = this.gridRef.bind(this);
    this.baseRef = this.baseRef.bind(this);
    this.toggleSortKey = this.toggleSortKey.bind(this);
    this.onSelectDocumentById = this.onSelectDocumentById.bind(this);
    this.showMethodMenu = this.showMethodMenu.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.columnWidth = this.columnWidth.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.setMoveKey = this.setMoveKey.bind(this);
    this.onMoveDone = this.onMoveDone.bind(this);
    this.onMove = this.onMove.bind(this);
    this.selectDataItem = this.selectDataItem.bind(this);
    // {index, isScrolling, key, parent, style}
    this.renderCell = this.renderCell.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.onShowMenu = this.onShowMenu.bind(this);
    this.rowHeight = this.rowHeight.bind(this);
    this.moveGuideRef = this.moveGuideRef.bind(this);
    this.onOuterMouseMove = this.onOuterMouseMove.bind(this);
    this.state = {
      force_update_grid: props.force_update_grid,
      grid_w: 0,
      grid_h: 0,
      scroll_left: 0
    };
  }

  saveCellInput(key_name, value) {
    var update;
    update = {};
    update[key_name] = value;
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

  toggleSortKey(key, dir) {
    var found_key;
    boundMethodCheck(this, GridView);
    found_key = _.find(this.props.query_item.sort_keys, {
      key: key
    });
    if (found_key) {
      found_key.dir = dir;
    } else {
      console.warn('cant toggle sort key, key not found.');
      return false;
    }
    if (this.props.query_item.called_at) {
      this.props.editQuery({
        sort_keys: this.props.query_item.sort_keys
      });
      this.props.saveQuery();
    } else {
      this.props.editQuery({
        sort_keys: this.props.query_item.sort_keys
      });
      this.props.saveQuery();
    }
    return setTimeout(this.props.runQuery, 0);
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
    return this.props.selectDataItem(this.props.data[g_opts.rowIndex - 1], this.state.scroll_top);
  }

  onOverlayClick() {
    boundMethodCheck(this, GridView);
    if (this.props.show_layouts_view || this.props.show_bookmarks_view) {
      return this.props.hideRightView();
    }
    return this.setState({
      show_method_menu: false,
      data_item_g_opts: null
    });
  }

  columnWidth(g_opts) {
    var c_w, key, key_name;
    boundMethodCheck(this, GridView);
    if (g_opts.index === this.props.query_item.layout_keys.length) {
      return 500;
    }
    key_name = this.props.query_item.layout_keys[g_opts.index];
    if (!key_name) {
      console.warn(g_opts.index, this.props.query_item.layout_keys);
      return null;
    }
    key = this.props.schema.keys[key_name];
    if (!key) {
      console.error(this.props.schema.keys);
      throw new Error('schema key not found: ' + key_name);
    }
    key._name = key_name;
    key.col_width = Math.max(key.min_width || 100, key.label.length * CHAR_W + CELL_PAD * 2 + 70);
    if (this.props.schema_state.key_col_widths[key._name]) {
      c_w = Math.max(key.min_width || 100, this.props.schema_state.key_col_widths[key._name]);
    } else {
      c_w = key.col_width || 100;
    }
    key._c_w = c_w;
    if (c_w <= key.col_width) {
      key._min_width = true;
    } else {
      key._min_width = false;
    }
    return c_w;
  }

  onScroll(e) {
    var trigger;
    boundMethodCheck(this, GridView);
    this.state.scroll_left = e.scrollLeft;
    if (this.state.scroll_top > 0) {
      trigger = true;
    }
    this.state.scroll_top = e.scrollTop;
    if (!this.props.query_item.end_reached && this.props.query_item.completed_at && e.scrollTop > 0 && e.scrollTop > (e.scrollHeight - (e.clientHeight * this.props.scroll_query_beta_offset))) {
      this.props.runQuery(true);
    }
    if (this.state.scroll_top || trigger) {
      return this.props.onScrollTop(this.state.scroll_top);
    }
  }

  setMoveKey(key, e) {
    boundMethodCheck(this, GridView);
    // log 'SET MOVE KEY',@props.query_item.layout_keys.indexOf(key)
    return this.setState({
      // scroll_to_col: @props.query_item.layout_keys.indexOf(key)
      move_key: key
    });
  }

  onMoveDone(key, new_width) {
    boundMethodCheck(this, GridView);
    // log 'DONE',key,new_width
    this.props.schema_state.key_col_widths[key._name] = new_width;
    this.setState({
      move_key: null
    });
    this._grid.recomputeGridSize();
    return this.props.saveSchemaState();
  }

  onMove(key, new_width) {
    boundMethodCheck(this, GridView);
    this.props.schema_state.key_col_widths[key._name] = new_width;
    return this._grid.recomputeGridSize();
  }

  selectDataItem(data_item) {
    boundMethodCheck(this, GridView);
    return this.props.selectDataItem(data_item, this.state.scroll_top);
  }

  renderCell(g_opts) {
    var alt_cell, data, data_obj, doc, e_style, edit_key, fill_fn, g_style, is_key, is_selected, key, key_label, key_name, label_string, lock_icon, max_l, r_color, resize_bar, schema, sort_down, sort_icon, sort_index_label, sort_key, sort_key_index, sort_opts, sort_up, v_w, value;
    boundMethodCheck(this, GridView);
    if (g_opts.columnIndex === this.props.query_item.layout_keys.length) {
      return h('div', {
        key: g_opts.key,
        style: g_opts.style
      });
    }
    schema = this.props.schema;
    data = this.props.data;
    doc = data[g_opts.rowIndex - 1];
    is_key = g_opts.rowIndex === 0;
    g_style = {};
    if (!is_key && !doc) {
      return h('div', {
        style: Object.assign(g_style, g_opts.style),
        key: g_opts.key
      });
    }
    if (!is_key && this.props.data_item_id) {
      is_selected = this.props.data_item_id === doc._id;
    }
    if (g_opts.rowIndex % 2 === 0) {
      alt_cell = true;
    }
    if (g_opts.rowIndex !== 0 && is_selected) {
      g_style.color = this.context.secondary.inv[0];
    }
    if (!g_style.background && alt_cell) {
      g_style.background = this.context.primary.inv[1];
    } else {
      g_style.background = this.context.primary.inv[0];
    }
    if (g_opts.rowIndex !== 0 && is_selected) {
      g_style.background = this.context.secondary.color[1];
    }
    if (schema.rowColor && doc) {
      r_color = schema.rowColor(schema, doc, g_opts.rowIndex);
      g_style.background = r_color[0];
      g_style.color = r_color[1];
    }
    if (is_selected && schema.rowColorSelect) {
      r_color = schema.rowColorSelect(schema, doc, g_opts.rowIndex);
      g_style.background = r_color[0];
      g_style.color = r_color[1];
    }
    
    // if g_opts.columnIndex == 0
    // 	if is_key
    // 		return null

    // 	# g_opts.style.width = '100%'
    // 	return h 'div',
    // 		style: Object.assign g_style,g_opts.style
    // 		key: g_opts.key
    // 		onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
    // 		h 'div',
    // 			className: cn css['model-grid-cell'],css['model-grid-cell-method-button'],'material-icons',(is_selected && css['model-grid-cell-selected'])
    // 			onClick: @showMethodMenu.bind(@,g_opts)
    // 			is_selected && 'arrow_forward' || 'more_horiz'
    // else
    key_name = this.props.query_item.layout_keys[g_opts.columnIndex];
    key = schema.keys[key_name];
    edit_key = !is_key && this.state.edit_key === key_name && is_selected;
    if (!key) {
      throw new Error('invalid key ' + key_name);
    }
    if (!is_key) {
      value = data[g_opts.rowIndex - 1][key_name];
    }
    
    // log 'render cell'
    e_style = {};
    if (key === this.state.focus_key && !this.state.move_key) {
      e_style.borderRight = '2px solid rgba(0,0,0,0.6)';
    } else {
      // g_opts.style.borderLeft = '2px solid rgba(0,0,0,0.3)'
      e_style.borderRight = '2px solid rgba(0,0,0,0.3)';
    }
    // g_opts.style.borderLeft = 'none'
    if (is_key) {
      sort_key_index = _.findIndex(this.props.query_item.sort_keys, {
        key: key_name
      });
      if (sort_key_index >= 0) {
        sort_key = this.props.query_item.sort_keys[sort_key_index];
      }
      if (is_selected && key.can_edit) {
        value = h(InputCell, {
          value: value,
          onSave: this.saveCellInput.bind(this, key_name)
        });
      } else if (!is_key && typeof value === 'string') {
        v_w = value.length * CHAR_W + CELL_PAD * 2;
        max_l = Math.floor((key._c_w - CELL_PAD * 2) / CHAR_W);
        if (v_w > key._c_w) {
          value = value.substring(0, max_l - 2) + '..';
        }
      }
      if (this.state.focus_key === key) {
        g_style.background = this.context.primary.inv[2];
      }
      // log sort_key
      if (key.indexed && sort_key) {
        sort_up = sort_key && sort_key.dir === 1;
        sort_down = sort_key && sort_key.dir === -1;
        if (sort_up) {
          g_style.background = 'rgb(255,255,0,0.3)';
        } else if (sort_down) {
          g_style.background = 'rgb(0,255,255,0.3)';
        }
        if (sort_up) {
          sort_icon = h('i', {
            style: {
              color: 'yellow',
              opacity: 1
            },
            onClick: this.toggleSortKey.bind(null, key_name, -1),
            className: cn('material-icons')
          }, 'keyboard_arrow_up');
        } else if (sort_down) {
          sort_icon = h('i', {
            style: {
              color: 'cyan',
              opacity: 1
            },
            onClick: this.toggleSortKey.bind(null, key_name, 1),
            className: cn('material-icons')
          }, 'keyboard_arrow_down');
        }
        sort_opts = h('div', {
          className: cn(css['model-grid-key-toggle'])
        }, sort_icon);
      }
      key._left = g_opts.style.left;
      v_w = key.label.length * CHAR_W + CELL_PAD * 2 + 70;
      max_l = Math.floor((key._c_w - CELL_PAD * 2 - 70) / CHAR_W);
      if (v_w > key._c_w) {
        if (max_l <= 2) {
          label_string = '';
        } else {
          label_string = key.label.substring(0, max_l - 2) + '..';
        }
      } else {
        label_string = key.label;
      }
      key_label = h('div', {
        className: css['model-grid-label'],
        onClick: (sort_up && this.toggleSortKey.bind(null, key_name, -1)) || (sort_down && this.toggleSortKey.bind(null, key_name, 1)) || null
      }, label_string);
      resize_bar = h('i', {
        style: {
          color: this.context.primary.color[2]
        },
        onMouseDown: this.setMoveKey.bind(this, key),
        className: 'material-icons ' + css['model-grid-key-resize']
      }, 'last_page');
      if (sort_key) {
        sort_index_label = h('div', {
          className: css['model-grid-label'],
          style: {
            paddingRight: 5,
            fontSize: 11,
            fontWeight: 600,
            lineHeight: 11,
            color: this.context.primary.color[0]
          }
        }, "[" + (sort_key_index + 1) + "]");
      }
      if (sort_key && sort_key.dir === 1) {
        g_style.color = 'yellow';
      } else if (sort_key && sort_key.dir === -1) {
        g_style.color = 'cyan';
      } else {
        g_style.color = this.context.primary.color[2];
      }
      if (schema.force_keys && schema.force_keys.length) {
        if (schema.force_keys.indexOf(key_name) >= 0) {
          lock_icon = h('div', {
            className: css['model-grid-label'],
            style: {
              paddingLeft: 5,
              fontSize: 11,
              lineHeight: 11,
              color: this.context.primary.color[0]
            }
          }, h('i', {
            className: 'material-icons'
          }, 'fiber_manual_record'));
        }
      }
      
      // log e_style
      return h('div', {
        className: css['model-grid-cell'],
        style: Object.assign(g_style, g_opts.style, e_style),
        key: g_opts.key
      // lock_icon
      }, sort_index_label, key_label, sort_opts, resize_bar);
    }
    if (!data[g_opts.rowIndex - 1].__filled_doc && (key.fill || schema.fill)) {
      data[g_opts.rowIndex - 1].__filled_doc = _.cloneDeep(data[g_opts.rowIndex - 1]);
      fill_fn = key.fill || schema.fill;
      fill_fn(data[g_opts.rowIndex - 1].__filled_doc);
      data_obj = data[g_opts.rowIndex - 1].__filled_doc;
    } else if (data[g_opts.rowIndex - 1].__filled_doc) {
      data_obj = data[g_opts.rowIndex - 1].__filled_doc;
    } else {
      data_obj = data[g_opts.rowIndex - 1];
    }
    // log data_obj.__filled
    return h('div', {
      style: Object.assign(g_style, g_opts.style, e_style),
      key: g_opts.key
    }, h('div', {
      onMouseDown: !is_selected && this.selectDataItem.bind(null, data[g_opts.rowIndex - 1]) || void 0,
      className: css['model-grid-cell'] + ' ' + (is_selected && css['model-grid-cell-selected'] || '')
    }, key.render && key.render(schema, data_obj) || value));
  }

  getGridKey(props) {
    var model_name;
    model_name = props.schema.name;
    return model_name + '-' + props.query_item._id + '-' + props.query_item.completed_at + '-' + props.query_item.layout_keys;
  }

  UNSAFE_componentWillUpdate(props, state) {
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
    if (g_k !== state.grid_key) {
      state.grid_key = g_k;
      state.force_update_grid = true;
    }
    if (props.scroll_top !== this.props.scroll_top) {
      state.trigger_scroll_top = props.scroll_top;
    }
    if (props.data_item_id !== this.props.data_item_id) {
      // log props.data_item_id,props.data,_.findIndex(props.data,_id:props.data_item_id)
      if (props.data_item_id) {
        // log props.data_item_id
        // log  _.findIndex(props.data,_id:props.data_item._id)
        state.scroll_to_row = _.findIndex(props.data, {
          _id: props.data_item_id
        });
      } else {
        state.scroll_to_row = void 0;
      }
    }
    if (this.base) {
      if (state.grid_w !== this.base.clientWidth || state.grid_h !== this.base.clientHeight) {
        // log 'resize grid'
        state.grid_w = this.base.clientWidth;
        return state.grid_h = this.base.clientHeight;
      }
    }
  }

  componentDidUpdate(props) {
    var ref, ref1;
    if (this.base) {
      this._rect = (ref = this.base) != null ? ref.getBoundingClientRect() : void 0;
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
      
      // log 'update grid size',@props.schema.name,@base.clientHeight,@base.clientWidth
      if ((ref1 = this._grid) != null) {
        ref1.recomputeGridSize();
      }
      this.setState({
        force_update_grid: false
      });
    }
    if (this.state.scroll_to_row || this.state.scroll_to_col || this.state.trigger_scroll_top) {
      return setTimeout(() => {
        return this.setState({
          trigger_scroll_top: void 0,
          scroll_to_row: void 0,
          scroll_to_col: void 0,
          _scroll_to_col: this.state.scroll_to_col,
          _scroll_to_row: this.state.scroll_to_row
        });
      }, 0);
    }
  }

  componentWillUnmount() {
    // log 'DELETE SCOPE'
    return hotkeys.deleteScope('modelgrid');
  }

  componentDidMount() {
    // log 'DID MOUNT'
    this.state.grid_key = this.getGridKey(this.props);
    if (this.props.data_item) {
      this.state.scroll_to_row = _.findIndex(this.props.data, {
        _id: this.props.data_item._id
      });
    }
    this.setState({});
    hotkeys.setScope('modelgrid');
    hotkeys('down', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.props.selectNextDataItem();
      return false;
    });
    hotkeys('up', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.props.selectPrevDataItem();
      return false;
    });
    hotkeys('right', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.scrollRight();
      return false;
    });
    hotkeys('left', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.scrollLeft();
      return false;
    });
    hotkeys('shift+down', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.props.selectNextDataItem(2);
      return false;
    });
    hotkeys('shift+up', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.props.selectPrevDataItem(2);
      return false;
    });
    hotkeys('shift+right', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.scrollRight(2);
      return false;
    });
    return hotkeys('shift+left', 'modelgrid', (event, handler) => {
      event.preventDefault();
      this.scrollLeft(2);
      return false;
    });
  }

  scrollLeft(skip) {
    var col, ref;
    boundMethodCheck(this, GridView);
    skip = skip || 1;
    if (!this.props.query_item || !((ref = this.props.query_item.layout_keys) != null ? ref.length : void 0)) {
      return false;
    }
    col = Math.max(0, (this.state._scroll_to_col - skip) || 0);
    return this.setState({
      scroll_to_col: col,
      focus_key: this.props.schema.keys[this.props.query_item.layout_keys[col]]
    });
  }

  scrollRight(skip) {
    var col, ref;
    boundMethodCheck(this, GridView);
    skip = skip || 1;
    if (!this.props.query_item || !((ref = this.props.query_item.layout_keys) != null ? ref.length : void 0)) {
      return false;
    }
    col = Math.min(this.props.query_item.layout_keys.length - 1, (this.state._scroll_to_col + skip) || 1);
    return this.setState({
      focus_key: this.props.schema.keys[this.props.query_item.layout_keys[col]],
      scroll_to_col: col
    });
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

  moveGuideRef(el) {
    boundMethodCheck(this, GridView);
    return this._move_guide = el;
  }

  onOuterMouseMove(e) {
    var i, key, key_index, key_left, key_name, key_width, len, ref, ref1;
    boundMethodCheck(this, GridView);
    this.state.clientX = e.clientX;
    if (this.state.move_key) {
      return;
    }
    ref = this.props.query_item.layout_keys;
    // log (e.clientX - @_rect.left)
    for (key_index = i = 0, len = ref.length; i < len; key_index = ++i) {
      key_name = ref[key_index];
      key = this.props.schema.keys[key_name];
      key_width = this.props.schema_state.key_col_widths[key._name] || key.col_width;
      key_left = this.props.schema.keys[key_name]._left;
      if ((key_left < (ref1 = e.clientX - this._rect.left + this.state.scroll_left) && ref1 < (key_left + key_width))) {
        if (this.state.focus_key !== key) {
          // log 'set focus key'
          return this.setState({
            focus_key: key,
            _scroll_to_col: key_index
          });
        }
      }
    }
  }

  render() {
    var data, grid, move_guide, overlay_bar_cn, overlay_visible, query_item, schema, scroll_to_col, scroll_to_row;
    schema = this.props.schema;
    data = this.props.data;
    query_item = this.props.query_item;
    if (!this.props.scroll_top) {
      if (this.state.scroll_to_row != null) {
        scroll_to_row = this.state.scroll_to_row + 1;
        scroll_to_row = Math.min(Math.max(scroll_to_row, 1), data.length + 1);
      }
    }
    if (this.state.scroll_to_col != null) {
      // log query_item.layout_keys.length
      scroll_to_col = Math.min(Math.max(this.state.scroll_to_col, 1), query_item.layout_keys.length + 2);
    }
    // log @props.scroll_top
    // log scroll_to_col
    grid = h(MultiGrid, {
      styleTopRightGrid: {
        background: this.context.primary.inv[1],
        borderBottom: '2px solid rgba(0,0,0,0.6)'
      },
      className: css['model-grid-list'],
      ref: this.gridRef,
      onScroll: this.onScroll,
      cellRenderer: this.renderCell,
      columnWidth: this.columnWidth,
      columnCount: (query_item.layout_keys.length + 1) || 0,
      fixedRowCount: 1,
      scrollToRow: scroll_to_row || void 0,
      scrollToAlignment: 'auto',
      scrollTop: this.state.trigger_scroll_top || void 0,
      scrollToColumn: scroll_to_col || void 0,
      height: this.state.grid_h,
      width: this.state.grid_w,
      rowHeight: this.rowHeight,
      rowCount: Math.max(data.length + 1, 2)
    });
    if (this.state.show_method_menu || this.props.show_layouts_view || this.props.show_bookmarks_view) {
      overlay_visible = true;
    }
    if (this.props.show_layouts_view || this.props.show_bookmarks_view) {
      overlay_bar_cn = css['vert-right-bar'];
    } else if (this.state.show_method_menu) {
      overlay_bar_cn = css['vert-left-bar'];
    }
    if (this.state.move_key) {
      move_guide = h(MoveGuide, {
        move_key: this.state.move_key,
        query_item: this.props.query_item,
        scroll_left: this.state.scroll_left,
        scroll_to_col: scroll_to_col,
        onMoveDone: this.onMoveDone,
        onMove: this.onMove,
        clientX: this.state.clientX
      });
    }
    return h(Slide, {
      ref: this.baseRef,
      outer_props: {
        onMouseMove: this.onOuterMouseMove
      },
      outerChildren: move_guide,
      className: css['model-grid-wrap']
    }, grid);
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

/***/ "./components/ModelGrid.coffee":
/*!*************************************!*\
  !*** ./components/ModelGrid.coffee ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {  // Color = require 'color'
var AlertDot, AlertOverlay, Bar, CodeEditor, Color, Component, GridView, HoverBox, Input, JsonView, Menu, MenuTab, ModelGrid, Overlay, QueryBuilderView, SearchView, Slide, Style, StyleContext, TabsView, _, cn, createElement, css, highlight, languages, rfc6902,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

({createElement, Component} = __webpack_require__(/*! react */ "react"));

global.h = createElement;

global.Component = Component;

Slide = __webpack_require__(/*! re-slide */ "re-slide");

Color = __webpack_require__(/*! color */ "color");

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

({Input, MenuTab, Menu, Bar, Overlay, AlertOverlay, StyleContext, AlertDot, HoverBox, Style} = __webpack_require__(/*! re-lui */ "re-lui"));

JsonView = __webpack_require__(/*! ./JsonView.coffee */ "./components/JsonView.coffee");

_ = __webpack_require__(/*! lodash */ "lodash");

global.xSeconds = function(howmany) {
  return 1000 * howmany;
};

global.xMinutes = function(howmany) {
  return 1000 * 60 * howmany;
};

global.xHours = function(howmany) {
  return xMinutes(howmany * 60);
};

global.xDays = function(howmany) {
  return xHours(howmany * 24);
};

rfc6902 = __webpack_require__(/*! rfc6902 */ "./node_modules/rfc6902/index.js");

// require 'colors'
CodeEditor = __webpack_require__(/*! react-simple-code-editor */ "./node_modules/react-simple-code-editor/lib/index.js").default;

({highlight, languages} = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js"));

__webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");

__webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");

__webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");

__webpack_require__(/*! prismjs/themes/prism-twilight.css */ "./node_modules/prismjs/themes/prism-twilight.css");

// dateFns = require('date-fns')
global.DIM2 = 40;

global.DIM = 30;

SearchView = __webpack_require__(/*! ./SearchView.coffee */ "./components/SearchView.coffee");

TabsView = __webpack_require__(/*! ./TabsView.coffee */ "./components/TabsView.coffee");

// BookmarksView = require './BookmarksView.coffee'
GridView = __webpack_require__(/*! ./GridView.coffee */ "./components/GridView.coffee");

// CalendarView = require './CalendarView.coffee'
QueryBuilderView = __webpack_require__(/*! ./QueryBuilderView */ "./components/QueryBuilderView.coffee");

ModelGrid = class ModelGrid extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.navNextQuery = this.navNextQuery.bind(this);
    this.navPrevQuery = this.navPrevQuery.bind(this);
    this.selectQuery = this.selectQuery.bind(this);
    this.selectQueryByLabel = this.selectQueryByLabel.bind(this);
    this.cleanQuery = this.cleanQuery.bind(this);
    this.runQuery = this.runQuery.bind(this);
    this.cloneQuery = this.cloneQuery.bind(this);
    this.cloneQueryAndSet = this.cloneQueryAndSet.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.createNewQuery = this.createNewQuery.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
    this.deleteQuery = this.deleteQuery.bind(this);
    this.getKeywordQueryObject = this.getKeywordQueryObject.bind(this);
    this.editQuery = this.editQuery.bind(this);
    this.getSchemaState = this.getSchemaState.bind(this);
    this.saveSchemaState = this.saveSchemaState.bind(this);
    this.clearQueryInput = this.clearQueryInput.bind(this);
    // findBookmarkByLabel: (bookmark_label)=>
    // 	return _.find(@props.bookmarks,bookmark_label:bookmark_label)

    // matchBookmarks: (label)=>
    // 	matched_queries = @props.bookmarks.filter (q)->
    // 		if q.bookmark_label.indexOf(label) >= 0
    // 			return true
    this.onScrollTop = this.onScrollTop.bind(this);
    this.selectDataItem = this.selectDataItem.bind(this);
    this.selectNextDataItem = this.selectNextDataItem.bind(this);
    this.selectPrevDataItem = this.selectPrevDataItem.bind(this);
    this.setQueryItemRunError = this.setQueryItemRunError.bind(this);
    this.mapDataItems = this.mapDataItems.bind(this);
    this.runStaticMethod = this.runStaticMethod.bind(this);
    this.runDataItemMethod = this.runDataItemMethod.bind(this);
    this.renderDataItemMethod = this.renderDataItemMethod.bind(this);
    this.renderStaticMethod = this.renderStaticMethod.bind(this);
    this.setActionMethodError = this.setActionMethodError.bind(this);
    this.setActionStaticError = this.setActionStaticError.bind(this);
    
    // clearActionQueryError: =>
    // 	@setState
    // 		action_query: {}
    // 		# action_error: null

    // createDataItem: =>
    // 	# @log 'create data item'
    // 	@setState
    // 		action_query:
    // 			data_item_id: JSON.stringify(@state.new_doc)
    // 			action: 'create'
    // 			called_at: Date.now()
    // 	@props.createDataItem(@state.new_doc).then (created_doc)=>
    // 		# @log 'created data_item',created_doc
    // 		@state.action_query.completed_at = Date.now()
    // 		@state.data_item = Object.assign {},created_doc
    // 		@runQuery()
    // 	.catch @setActionMethodError.bind(@,@state.new_doc)

    // deleteDataItem: =>
    // 	# @log 'delete data item'
    // 	@setState
    // 		action_query:
    // 			data_item_id: @state.data_item._id
    // 			data_item_label: @state.data_item._label
    // 			action: 'delete'
    // 			called_at: Date.now()

    // 	@props.deleteDataItem(@state.data_item._id).then (deleted_doc_id)=>
    // 		# @log 'deleted data_item',deleted_doc_id
    // 		@state.action_query.completed_at = Date.now()
    // 		if @state.data_item._id == deleted_doc_id
    // 			@setState
    // 				data_item: null
    // 		@runQuery()
    // 	.catch @setActionMethodError.bind(@,@state.data_item)
    this.updateDataItem = this.updateDataItem.bind(this);
    this.getDataItem = this.getDataItem.bind(this);
    // componentWillUpdate: (props,state)->
    // 	# log state.schema_state
    // 	if @state.schema_state != state.schema_state && state.schema_state
    // 		Object.assign state,@state.schema_state
    // 		if state.schema_state.queries.length
    // 			state.query_item = state.schema_state.queries[state.schema_state.queries.length-1]

    // componentDidUpdate: (props,state)->
    // 	log 'ModelGrid componentDidUpdate'

    // 	@state.queries = @state.queries.slice(0,5)
    // 	save_state = Object.assign {},
    // 		key_col_widths: @state.key_col_widths
    // 		queries: @state.queries
    // 		bookmarks: @state.private_bookmarks
    // 		data_item_id: @state.data_item_id
    // 		show_json_view: @state.show_json_view
    // 		new_doc: @state.new_doc

    // 	@props.onSchemaStateUpdated?(save_state)

    // 	if @state.get_data_item || (@state.data_item && @state.show_json_view && ((@state.show_json_view != state.show_json_view) || @state.action_query.data_item_id != @state.data_item._id))
    // 		@state.get_data_item = false
    // 		@getDataItem()

    // 	split_vert = if (@base && @base.clientHeight > @base.clientWidth) then true else false
    // 	if split_vert != @state.split_vert
    // 		@setState
    // 			split_vert: split_vert

    // 	if @state.show_json_view != state.show_json_view
    // 		@forceUpdate()

    // 	if props.run_query_item != @props.run_query_item
    // 		# @log "RUN PROPS QUERY ITEM"
    // 		@cloneQueryItemAndSet(@props.run_query_item,@state.query_item,true)

    // 	if !@props.data_item_id && @state.data_item
    // 		@setState
    // 			data_item: null

    // 	if @state.schema_state_id != state.schema_state_id || @props.query_state_id != props.query_state_id 
    // 		@runQuery()

    // 	# if state.queries_updated_at != @state.queries_updated_at
    // 	# 	@mapQueryItems()

    // 	if (!@state.data_item || state.query_item != @state.query_item || !state.data_item ) && @state.show_json_view
    // 		@hideJsonView()

    // 	if @state.data_item
    // 		if @state.data_item._id != @state.editor_value_id
    // 			if @state.data_item
    // 				state.editor_value = JSON.stringify(@state.data_item,null,4)
    // 				state.editor_patches = []
    // 			else
    // 				state.editor_value = "{}"
    // 				state.editor_patches = []
    // 			@setState
    // 				editor_value_id: @state.data_item._id

    // 	else
    // 		if @state.editor_value != '{}' || @state.editor_patches.length
    // 			@setState
    // 				editor_value: '{}'
    // 				editor_patches: []
    this.hideJsonView = this.hideJsonView.bind(this);
    
    // componentDidMount: =>
    // 	Object.assign @state,@state.schema_state
    // 	for q in @state.queries
    // 		if q.called_at && !q.completed_at
    // 			q.called_at = q.completed_at = 0

    // 	log 'run query'
    // 	@runQuery()

    // setScrollIndex: (state)=>
    // 	state = state || @state
    // 	if state.query_item && state.data_item
    // 		state.scroll_to_index = -1
    // 		data = state.data.get(state.query_item._id)
    // 		if data
    // 			for data_item,i in data
    // 				if data_item._id == state.data_item._id
    // 					state.scroll_to_index = i
    // 					break
    this.showJSONView = this.showJSONView.bind(this);
    this.closeJSONView = this.closeJSONView.bind(this);
    this.setBookmarkQueryItem = this.setBookmarkQueryItem.bind(this);
    this.onEditorValueChange = this.onEditorValueChange.bind(this);
    this.baseRef = this.baseRef.bind(this);
    this.matchQueryByLabelPart = this.matchQueryByLabelPart.bind(this);
    this.setFirstSearchQuery = this.setFirstSearchQuery.bind(this);
    this.selectFirstSearchQuery = this.selectFirstSearchQuery.bind(this);
    this.showQueryBuilderHoverBox = this.showQueryBuilderHoverBox.bind(this);
    this.setHoverBox = this.setHoverBox.bind(this);
    this.onSearchInputLabel = this.onSearchInputLabel.bind(this);
    window._grid = this; //DEBUG
    this.state = {
      is_visible: false,
      scroll_to_index: -1,
      key_col_widths: {},
      editor_patches: [],
      editor_error: null,
      editor_value: '{}',
      data_item: null,
      data_item_id: props.data_item_id,
      query_item: null,
      data: new Map(),
      schema: props.schema,
      
      // local storage
      schema_queries: {},
      schema_queries_indices: {},
      // external persistant storage
      public_schema_queries: {},
      private_schema_queries: {},
      schema_states: {},
      schema_state_scrolls: {},
      hoverbox: {
        visible: false,
        pointer_events: true,
        onClose: () => {
          this.state.hoverbox.visible = false;
          this.setState({});
          return this.runQuery();
        }
      }
    };
    this.fillSchemaState();
    // log @state
    this.g_props = {
      selectDataItem: this.selectDataItem,
      updateDataItem: this.updateDataItem,
      deleteDataItem: this.deleteDataItem,
      createDataItem: this.createDataItem,
      showJSONView: this.showJSONView,
      // setQueryItem: @setQueryItem
      // updateQueryItemAndSet: @updateQueryItemAndSet
      // updateQueryItemTypeAndSet: @updateQueryItemTypeAndSet
      // updateQueryItem: @updateQueryItem
      // cloneQueryItemAndSet: @cloneQueryItemAndSet
      // cloneQueryItem: @cloneQueryItem
      runQuery: this.runQuery,
      selectQuery: this.selectQuery,
      selectQueryByLabel: this.selectQueryByLabel,
      // runDataItemMethod: @runDataItemMethod
      // runStaticMethod: @runStaticMethod
      updateSelectedDocument: this.updateSelectedDocument,
      renderDataItemMethod: this.renderDataItemMethod,
      // setBookmarkQueryItem: @setBookmarkQueryItem
      selectNextDataItem: this.selectNextDataItem,
      selectPrevDataItem: this.selectPrevDataItem,
      showQueryBuilderHoverBox: this.showQueryBuilderHoverBox,
      onScrollTop: this.onScrollTop,
      saveSchemaState: this.saveSchemaState,
      navPrevQuery: this.navPrevQuery,
      navNextQuery: this.navNextQuery,
      onRenderedSearchLabels: this.onRenderedSearchLabels,
      editQuery: this.editQuery,
      saveQuery: this.saveQuery,
      setFirstSearchQuery: this.setFirstSearchQuery,
      onSearchInputLabel: this.onSearchInputLabel,
      cloneQueryAndSet: this.cloneQueryAndSet,
      selectFirstSearchQuery: this.selectFirstSearchQuery
    };
  }

  log() {
    boundMethodCheck(this, ModelGrid);
    return console.log('%c [modelgrid]', 'color:yellow', arguments[0] || '', arguments[1] || '', arguments[2] || '', arguments[3] || '', arguments[4] || '', arguments[5] || '');
  }

  loadLocalState() {
    var m_state;
    m_state = JSON.parse(localStorage.getItem('re-moodelgrid-local-state') || '{}');
    return Object.assign(this.state, m_state);
  }

  saveLocalState() {
    var save_str;
    // @log 'saving local state'
    save_str = JSON.stringify({
      schema_queries: this.state.schema_queries,
      schema_state_scrolls: this.state.schema_state_scrolls,
      schema_queries_indices: this.state.schema_queries_indices
    });
    return localStorage.setItem('re-moodelgrid-local-state', save_str);
  }

  fillSchemaState() {
    this.state.schema_queries[this.state.schema.name] = this.state.schema_queries[this.state.schema.name] || [];
    this.state.schema_states[this.state.schema.name] = this.state.schema_states[this.state.schema.name] || {};
    this.state.schema_states[this.state.schema.name].key_col_widths = this.state.schema_states[this.state.schema.name].key_col_widths || {};
    this.state.public_schema_queries[this.state.schema.name] = this.state.public_schema_queries[this.state.schema.name] || [];
    return this.state.private_schema_queries[this.state.schema.name] = this.state.private_schema_queries[this.state.schema.name] || [];
  }

  getAllSchemaData() {
    return Promise.all([this.getSchemaPublicQueries(), this.getSchemaPrivateQueries(), this.getSchemaState()]);
  }

  async componentDidMount() {
    boundMethodCheck(this, ModelGrid);
    this.fillSchemaState();
    this.loadLocalState();
    this.decideQueryItem();
    await this.getAllSchemaData();
    this.state.scroll_top = this.state.schema_state_scrolls[this.props.schema.name];
    return this.runQuery();
  }

  // componentWillUpdate: (props,state)=>
  // state.data_item = props.data_item
  // if !props.data_item_id
  // 	state.data_item = null

    // if state.schema_state_id != state.schema_state_id
  // 	state.schema_state_id = state.schema_state_id
  // 	Object.assign state,@getDefaultConfig(props)
  // 	Object.assign state,state.schema_state

    // 	# log 'NEW ID'
  // 	# if state.data_item
  // 	# 	@props.onSelectDataItem?(state.data_item)

    // 	# log 'RUN QUERY ONCE'
  // 	state.run_query_once = true

    // if props.query_state_id != @props.query_state_id
  // 	state.run_query_once = true

    // if !state.data_item
  // 	state.show_json_view = false

    // if state.query_item != @state.query_item
  // 	state.show_json_view = false

    // if state.data_item
  // 	if state.data_item._id != state.editor_value_id
  // 		if state.data_item
  // 			state.editor_value = JSON.stringify(state.data_item,null,4)
  // 			state.editor_patches = []
  // 		else
  // 			state.editor_value = "{}"
  // 			state.editor_patches = []

    // 		state.editor_value_id = state.data_item._id
  // else
  // 	state.editor_value = '{}'
  // 	state.editor_patches = []
  componentDidUpdate(props, state) {
    this.state.scroll_top = void 0;
    if (this.props.data_item_id !== props.data_item_id) {
      this.state.data_item_id = this.props.data_item_id;
      if (this.state.data_item_id) {
        this.getDataItem();
      } else {
        this.state.data_item = null;
      }
    }
    if (props.schema !== this.props.schema || this.props.schema_data_sync_id !== props.schema_data_sync_id) {
      // log "CHANGE SCHEMA"
      this.state.schema = this.props.schema;
      this.fillSchemaState();
      this.decideQueryItem();
      this.getAllSchemaData();
      // log 'SET SCORLL STOP',@state.schema_state_scrolls[@props.schema.name]
      this.state.scroll_top = this.state.schema_state_scrolls[this.props.schema.name];
      this.runQuery();
    }
    if (this.props.onUpdate) {
      return this.props.onUpdate({
        schema_queries_indices: this.state.schema_queries_indices,
        schema_states: this.state.schema_states,
        query_item: this.state.query_item,
        schema_queries: this.state.schema_queries,
        public_schema_queries: this.state.public_schema_queries,
        private_schema_queries: this.state.private_schema_queries,
        schema_states: this.state.schema_states,
        hoverbox: this.state.hoverbox
      });
    }
  }

  //*****************#
  // QUERY API
  //*****************#
  decideQueryItem() {
    var query_index;
    query_index = this.state.schema_queries_indices[this.state.schema.name] || 0;
    if (query_index == null) {
      query_index = 0;
    }
    this.state.schema_queries[this.state.schema.name] = this.state.schema_queries[this.state.schema.name] || [];
    query_index = Math.min(query_index, this.state.schema_queries[this.state.schema.name].length - 1);
    this.state.schema_queries_indices[this.state.schema.name] = query_index;
    if (!this.state.schema_queries[this.state.schema.name].length) {
      return this.state.query_item = this.createNewQuery(this.state.schema);
    } else {
      return this.state.query_item = this.state.schema_queries[this.state.schema.name][query_index];
    }
  }

  navNextQuery() {
    var current_query_index, ref;
    boundMethodCheck(this, ModelGrid);
    current_query_index = this.state.schema_queries_indices[this.state.schema.name];
    if (current_query_index == null) {
      return false;
    }
    if (this.state.schema_queries[this.state.schema.name][current_query_index + 1] != null) {
      this.state.schema_queries_indices[this.state.schema.name] += 1;
      this.state.schema_state_scrolls[this.state.schema.name] = 0;
      this.state.query_item = (ref = this.state.schema_queries[this.state.schema.name]) != null ? ref[current_query_index + 1] : void 0;
      this.setState({});
      this.runQuery();
      return this.saveLocalState();
    }
  }

  navPrevQuery() {
    var current_query_index, ref;
    boundMethodCheck(this, ModelGrid);
    current_query_index = this.state.schema_queries_indices[this.state.schema.name];
    if ((current_query_index == null) || current_query_index === 0) {
      return false;
    }
    if (this.state.schema_queries[this.state.schema.name][current_query_index - 1] != null) {
      this.state.schema_queries_indices[this.state.schema.name] -= 1;
      this.state.schema_state_scrolls[this.state.schema.name] = 0;
      this.state.query_item = (ref = this.state.schema_queries[this.state.schema.name]) != null ? ref[current_query_index - 1] : void 0;
      this.setState({});
      this.runQuery();
      return this.saveLocalState();
    }
  }

  resetQuery(qi) {
    qi.call_count = 0;
    qi.skip = 0;
    return qi.limit = this.props.query_limit || 100;
  }

  selectQuery(query_item) {
    boundMethodCheck(this, ModelGrid);
    // log 'SELECT QUERY'
    this.state.schema_state_scrolls[this.state.schema.name] = 0;
    if (this.state.query_item._id === query_item._id && query_item._v === this.state.query_item._id) {
      return false;
    }
    this.resetQuery(query_item);
    this.clearQueryIndex();
    this.state.query_item = query_item;
    return this.runQuery();
  }

  selectQueryByLabel(query_label) {
    var f_query, private_queries, public_queries;
    boundMethodCheck(this, ModelGrid);
    // log query_label
    public_queries = this.state.public_schema_queries[this.state.schema.name];
    private_queries = this.state.private_schema_queries[this.state.schema.name];
    f_query = _.find(public_queries, {
      label: query_label
    });
    if (f_query) {
      return this.selectQuery(f_query);
    }
    f_query = _.find(private_queries, {
      label: query_label
    });
    if (f_query) {
      return this.selectQuery(f_query);
    }
  }

  clearQueryIndex() {
    // log 'CLEAR QUERY INDEX'
    return this.state.schema_queries[this.state.schema.name].splice(this.state.schema_queries_indices[this.state.schema.name] + 1);
  }

  // @state.schema_queries_indices[@state.schema.name] = Math.max(@state.schema_queries[@state.schema.name].length-1,0)
  async getSchemaPublicQueries() {
    var public_queries, schema_name;
    schema_name = this.state.schema.name;
    public_queries = (await this.props.getSchemaPublicQueries(schema_name, this.props.user_id));
    this.state.public_schema_queries[schema_name] = public_queries || [];
    // @log 'getSchemaPublicQueries',public_queries
    this.mapSchemaQueries(schema_name);
    return this.setState({});
  }

  async getSchemaPrivateQueries() {
    var private_queries, schema_name;
    schema_name = this.state.schema.name;
    private_queries = (await this.props.getSchemaPrivateQueries(schema_name, this.props.user_id));
    this.state.private_schema_queries[schema_name] = private_queries || [];
    // @log 'getSchemaPrivateQueries',private_queries
    this.mapSchemaQueries(schema_name);
    return this.setState({});
  }

  pushQuery(qi) {
    var schema_queries;
    // log 'PUSH QUERY TO HISTORY'
    schema_queries = this.state.schema_queries[this.state.schema.name];
    schema_queries.push(qi);
    if (schema_queries.length > this.props.max_save_local_query_count) {
      this.state.schema_queries[this.state.schema.name] = schema_queries.slice(Math.max(schema_queries.length - this.props.max_save_local_query_count, 0), schema_queries.length - 1);
    }
    this.state.schema_queries_indices[this.state.schema.name] = this.state.schema_queries[this.state.schema.name].length - 1;
    return this.saveLocalState();
  }

  cleanQuery() {
    var j, key, len, ref, results;
    boundMethodCheck(this, ModelGrid);
    if (this.state.query_item.type === 'key') {
      if (!this.state.query_item.input_value) {
        this.state.query_item.type = 'key';
        this.state.query_item.value = '';
        this.state.query_item.input_value = '';
      }
    }
    if (this.state.query_item.layout_keys.length === 0) {
      this.state.query_item.layout_keys[0] = '_label';
    }
    this.state.query_item.hidden_layout_keys = [];
    this.state.query_item.layout_keys = this.state.query_item.layout_keys.filter((key) => {
      return this.state.schema.keys[key] != null;
    });
    this.state.query_item.required_keys = this.state.schema.required_keys;
    this.state.query_item.populate = [];
    ref = this.state.query_item.layout_keys;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      this.state.query_item.populate = this.state.query_item.populate.concat(this.state.schema.keys[key].populate || []);
      if (this.state.schema.keys[key].keys_array) {
        results.push(this.state.query_item.hidden_layout_keys = this.state.query_item.hidden_layout_keys.concat(this.state.schema.keys[key].keys_array));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  runQuery(run_next) {
    var _scroll_top, q_i, qi;
    boundMethodCheck(this, ModelGrid);
    if (this.state.scroll_top) {
      _scroll_top = this.state.scroll_top;
    }
    // @log 'run query'
    // log 'RUN QUERY',@state.query_item._id
    this.cleanQuery();
    qi = this.state.query_item;
    if (qi.error) {
      return;
    }
    // if run_next
    // 	@state.scroll_to_index = -1

    // if qi.keyword_input
    // 	qi.
    qi.called_at = Date.now();
    qi.completed_at = null;
    qi.call_count = this.state.query_item.call_count || 0;
    qi.call_count += 1;
    // if run_all
    if (run_next === true) {
      qi.skip += qi.limit;
      qi.limit = this.props.query_limit;
    } else {
      qi.limit += qi.skip;
      qi.skip = 0;
      qi.end_reached = false;
    }
    q_i = Object.assign({}, this.state.query_item);
    if (q_i.json_input && q_i.type === 'json') {
      q_i.value = eval('(' + q_i.json_input + ')');
    }
    if (qi.call_count === 1) {
      this.pushQuery(qi);
    }
    this.state.query_item.error = void 0;
    this.setState({});
    this.props.runQuery(this.props.schema.name, q_i).then((data) => {
      var current_data;
      // log 'QUERY RAN'
      if (q_i._id !== this.state.query_item._id) {
        console.warn('previously ran query does not match current state query');
        return false;
      }
      // return @setQueryItemRunError(q_i,new Error('previously ran query does not match current state query '+q_i._id+' != '+@state.query_item._id))
      current_data = this.state.data.get(this.state.query_item._id) || [];
      if (!run_next) {
        current_data = [];
        log(_scroll_top);
        if (_scroll_top) {
          this.state.scroll_top = _scroll_top;
        }
      } else {

      }
      
      // log @state.query_item._id,current_data.concat(data)
      this.state.data.set(this.state.query_item._id, current_data.concat(data));
      this.state.query_item.completed_at = Date.now();
      if (data.length < this.state.query_item.limit) {
        this.state.query_item.end_reached = true;
      }
      this.mapDataItems();
      // log current_data.length
      // if !run_next
      // 	@setScrollIndex()

      // log @state.scroll_to_index
      return this.forceUpdate();
    }).catch(this.setQueryItemRunError.bind(this, qi));
    this.saveLocalState();
    return this.setState({});
  }

  resetQuerySaveState(qi) {
    qi.called_at = void 0;
    qi.updated_at = void 0;
    qi.created_at = void 0;
    return qi._id = Date.now().toString(24);
  }

  cloneQuery() {
    var cloned_query;
    boundMethodCheck(this, ModelGrid);
    // @log 'clone query'
    cloned_query = _.cloneDeep(this.state.query_item);
    this.resetQuerySaveState(cloned_query);
    this.resetQuery(cloned_query);
    return cloned_query;
  }

  cloneQueryAndSet(edits) {
    var cloned_query;
    boundMethodCheck(this, ModelGrid);
    log('clone query');
    cloned_query = this.cloneQuery();
    log('cloned query');
    this.clearQueryIndex();
    if (edits) {
      Object.assign(cloned_query, edits);
    }
    // @resetQuerySaveState(clearQueryIndex)
    return this.setState({
      query_item: cloned_query
    });
  }

  clearQuery() {
    boundMethodCheck(this, ModelGrid);
    // @log 'clear query'
    return this.setState({
      query_item: this.createNewQuery()
    });
  }

  createNewQuery() {
    var query;
    boundMethodCheck(this, ModelGrid);
    query = {
      sort_keys: [],
      layout_keys: [this.state.schema.default_key || this.state.schema.keys_array[0]],
      search_key: this.state.schema.default_key || this.state.schema.keys_array[0],
      type: 'keyword',
      label: null, //bookmark label
      user_id: this.props.user_id,
      skip: 0, //skip
      limit: this.props.query_limit || 100,
      call_count: 0,
      _id: Date.now().toString(24),
      _v: 0,
      is_public: false,
      called_at: null,
      json_input: null,
      keyword_input: null
    };
    // @log 'create new query',query
    return query;
  }

  setNewQuery() {
    var query_item;
    query_item = this.createNewQuery(this.state.schema);
    return this.setState({
      query_item: query_item
    });
  }

  saveQuery() {
    var fpriqi, fpubqi, priv_queries, pub_queries;
    boundMethodCheck(this, ModelGrid);
    pub_queries = this.state.public_schema_queries[this.state.schema.name];
    priv_queries = this.state.private_schema_queries[this.state.schema.name];
    // @log 'save query'
    fpubqi = _.findIndex(pub_queries, {
      _id: this.state.query_item._id
    });
    fpriqi = _.findIndex(priv_queries, {
      _id: this.state.query_item._id
    });
    if (fpubqi >= 0) {
      pub_queries.splice(fpubqi, 1);
    }
    if (fpriqi >= 0) {
      priv_queries.splice(fpriqi, 1);
    }
    if (this.state.query_item.is_public) {
      if (fpubqi >= 0) {
        pub_queries.splice(fpubqi, 0, this.state.query_item);
      } else {
        pub_queries.unshift(this.state.query_item);
      }
    } else {
      if (fpriqi >= 0) {
        priv_queries.splice(fpriqi, 0, this.state.query_item);
      } else {
        priv_queries.unshift(this.state.query_item);
      }
    }
    this.props.saveQuery(this.state.schema.name, this.state.query_item);
    this.saveLocalState();
    return this.setState({});
  }

  deleteQuery() {
    var f_i;
    boundMethodCheck(this, ModelGrid);
    // if @state.query_item.is_public
    f_i = _.findIndex(this.state.public_schema_queries[this.state.schema.name], {
      _id: this.state.query_item._id
    });
    if (f_i >= 0) {
      this.state.public_schema_queries[this.state.schema.name].splice(f_i, 1);
    } else {
      f_i = _.findIndex(this.state.private_schema_queries[this.state.schema.name], {
        _id: this.state.query_item._id
      });
      if (f_i >= 0) {
        this.state.private_schema_queries[this.state.schema.name].splice(f_i, 1);
      }
    }
    if (f_i >= 0) {
      this.state.schema_queries[this.state.schema.name].splice(f_i, 1);
    }
    this.props.deleteQuery(this.props.schema.name, this.state.query_item);
    this.state.query_item = this.cloneQuery();
    this.saveLocalState();
    return this.setState({});
  }

  getKeywordQueryObject(keyword, query_item) {
    var keyword_parts, q_obj;
    boundMethodCheck(this, ModelGrid);
    keyword_parts = keyword.split(' ').map(function(part) {
      return "\b" + part;
    });
    q_obj = {};
    q_obj[query_item.search_key] = `//${keyword_parts.join('|')}//ig`;
    return q_obj;
  }

  editQuery(edits) {
    var qi;
    boundMethodCheck(this, ModelGrid);
    qi = this.state.query_item;
    if (qi.label && this.props.user_id !== qi.user_id) {
      console.warn('cant edit query thats not yours');
      return false;
    }
    // if !qi.label && qi.called_at
    // 	@state.query_item = @cloneQuery()
    // 	qi = @state.query_item

    // log edits,qi._id,@state.query_item._id
    if (edits.type) {
      if (edits.type === 'json') {
        qi.type = 'json';
        if (qi.keyword_input && !qi.json_input) {
          qi.json_input = JSON.stringify(this.getKeywordQueryObject(qi.keyword_input, qi), 0, 2);
          qi.keyword_input = void 0;
        }
      } else {
        qi.type = 'key';
        qi.keyword_input = qi.keyword_input || '';
      }
    }
    Object.assign(qi, edits);
    // log qi._id,edits

    // if edits.label
    qi.user_id = this.props.user_id;
    return this.setState({});
  }

  mapSchemaQueries(schema_name, bookmarks) {
    var f_q, i, j, len, priv_books, pub_books, queries, query_item, results;
    priv_books = this.state.private_schema_queries[schema_name];
    pub_books = this.state.public_schema_queries[schema_name];
    this.state.mapped_queries_v = Date.now();
    queries = this.state.schema_queries[schema_name];
    results = [];
    for (i = j = 0, len = queries.length; j < len; i = ++j) {
      query_item = queries[i];
      f_q = _.find(priv_books, {
        _id: query_item._id
      });
      if (f_q && f_q._v !== query_item._v) {
        results.push(this.resetQuerySaveState(query_item));
      } else {
        f_q = _.find(pub_books, {
          _id: query_item._id
        });
        if (f_q && f_q._v !== query_item._v) {
          results.push(this.resetQuerySaveState(query_item));
        } else {
          results.push(void 0);
        }
      }
    }
    return results;
  }

  async getSchemaState() {
    var schema_name, schema_state;
    boundMethodCheck(this, ModelGrid);
    schema_name = this.state.schema.name;
    schema_state = (await this.props.getSchemaState(schema_name));
    if (this.state.schema.name !== schema_name) {
      this.log('getSchemaState (reload - interrupted)');
      return false;
    }
    // log 'GOT SCHEMA STATE'
    Object.assign(this.state.schema_states[schema_name], schema_state);
    return this.setState({});
  }

  saveSchemaState() {
    boundMethodCheck(this, ModelGrid);
    this.props.saveSchemaState(this.state.schema.name, this.state.schema_states[this.state.schema.name]);
    return this.setState({});
  }

  clearQueryInput() {
    boundMethodCheck(this, ModelGrid);
    this.state.query_item.json_input = void 0;
    this.state.query_item.keyword_input = void 0;
    return this.setState({});
  }

  onScrollTop(scroll_top) {
    boundMethodCheck(this, ModelGrid);
    if (!this.state.schema_state_scrolls[this.state.schema.name]) {
      this.state.schema_state_scrolls[this.state.schema.name] = scroll_top;
      return this.saveLocalState();
    } else if (Math.abs(this.state.query_item.scroll_top - scroll_top) > 200) {
      this.state.schema_state_scrolls[this.state.schema.name] = scroll_top;
      return this.saveLocalState();
    } else {
      return this.state.schema_state_scrolls[this.state.schema.name] = scroll_top;
    }
  }

  selectDataItem(item) {
    boundMethodCheck(this, ModelGrid);
    // log scroll_top
    this.state.query_item.selected_data_item_id = item._id;
    // @state.query_item.scroll_top = scroll_top
    this.props.selectDataItem(item._id);
    this.saveLocalState();
    return this.saveSchemaState();
  }

  selectNextDataItem(skip) {
    var data, i, n_i;
    boundMethodCheck(this, ModelGrid);
    skip = skip || 1;
    data = this.state.data.get(this.state.query_item._id);
    if (this.props.data_item_id) {
      i = _.findIndex(data, {
        _id: this.props.data_item_id
      });
      if (data.length > 0) {
        n_i = Math.min(data.length - 1, i + skip);
        return this.selectDataItem(data[n_i]);
      }
    } else {
      if (data.length) {
        return this.selectDataItem(data[0]);
      }
    }
  }

  selectPrevDataItem(skip) {
    var data, i, n_i;
    boundMethodCheck(this, ModelGrid);
    skip = skip || 1;
    data = this.state.data.get(this.state.query_item._id);
    if (this.props.data_item_id) {
      i = _.findIndex(data, {
        _id: this.props.data_item_id
      });
      if (data.length > 0) {
        n_i = Math.max(0, i - skip);
        return this.selectDataItem(data[n_i]);
      }
    } else {
      if (data.length) {
        return this.selectDataItem(data[0]);
      }
    }
  }

  setQueryItemRunError(query_item, error) {
    var base;
    boundMethodCheck(this, ModelGrid);
    query_item.error = error.message;
    query_item.completed_at = Date.now();
    this.setState({
      query_item_run_error_visible: true,
      query_item_run_error: {
        error: error,
        query_item: query_item
      }
    });
    return typeof (base = this.props).onError === "function" ? base.onError(error) : void 0;
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

  async runStaticMethod(method) {
    boundMethodCheck(this, ModelGrid);
    // log 'RUN STATIC METHOD',method
    this.setState({
      action_query: {
        data_item_id: '~',
        data_item_label: this.state.schema.name,
        action: method.name,
        called_at: Date.now()
      }
    });
    if (method.run) {
      await method.run(this.state.schema, method);
    } else {
      await this.props.runStaticMethod(this.state.schema, method);
    }
    this.state.action_query.completed_at = Date.now();
    return this.runQuery();
  }

  async runDataItemMethod(method, callback) {
    var res;
    boundMethodCheck(this, ModelGrid);
    this.setState({
      action_query: {
        data_item_id: this.state.data_item._id,
        data_item_label: this.state.data_item._label,
        action: method.name,
        called_at: Date.now()
      }
    });
    if (method.run) {
      res = (await method.run(this.state.schema, this.state.data_item, method));
    } else {
      res = (await this.props.runDataItemMethod(this.state.schema, this.state.data_item, method));
    }
    this.state.action_query.completed_at = Date.now();
    this.setState({
      data_item: Object.assign({}, res.data_item)
    });
    this.runQuery();
    return typeof callback === "function" ? callback(res) : void 0;
  }

  renderDataItemMethod(method, get_method_res_callback, method_res) {
    var method_exec;
    boundMethodCheck(this, ModelGrid);
    // log get_method_res_callback
    method_exec = this.runDataItemMethod.bind(this, method, get_method_res_callback);
    return method.render(this.state.schema, this.state.data_item, method_exec, method_res);
  }

  renderStaticMethod(method, get_method_res_callback, method_res) {
    var method_exec;
    boundMethodCheck(this, ModelGrid);
    // log get_method_res_callback
    method_exec = this.runStaticMethod.bind(this, method, get_method_res_callback);
    return method.render(this.state.schema, method_exec, method_res);
  }

  async setActionMethodError(data_item, error) {
    var base;
    boundMethodCheck(this, ModelGrid);
    await this.setState({
      action_query: {},
      query_item_run_error_visible: false,
      action_error: {
        data_item: data_item,
        error: error
      }
    });
    if (typeof (base = this.props).onError === "function") {
      base.onError(error, data_item);
    }
    return false;
  }

  async setActionStaticError(error) {
    var base;
    boundMethodCheck(this, ModelGrid);
    await this.setState({
      action_query: {},
      query_item_run_error_visible: false,
      action_error: {
        error: error
      }
    });
    return typeof (base = this.props).onError === "function" ? base.onError(error) : void 0;
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
    var ref, ref1, ref2;
    boundMethodCheck(this, ModelGrid);
    if (!((ref = this.state.action_query) != null ? ref.completed_at : void 0) && ((ref1 = this.state.action_query) != null ? ref1.called_at : void 0)) {
      return;
    }
    this.setState({
      action_query: {
        body: {},
        data_item_id: this.state.data_item_id,
        data_item_label: ((ref2 = this.state.data_item) != null ? ref2._label : void 0) || this.state.data_item_id,
        called_at: Date.now(),
        action: 'get'
      }
    });
    // log @state.data_item_id
    return this.props.getDataItem(this.props.schema.name, this.state.data_item_id).then((doc) => {
      // log doc
      this.state.action_query.completed_at = Date.now();
      this.state.editor_value_id = null;
      if (this.state.data_item_id === doc._id) {
        return this.setState({
          data_item: doc,
          data_item_id: doc._id
        });
      }
    }).catch(this.setActionMethodError.bind(this, this.state.data_item));
  }

  hideJsonView() {
    boundMethodCheck(this, ModelGrid);
    return this.setState({
      show_json_view: false
    });
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

  setBookmarkQueryItem(query_item) {
    boundMethodCheck(this, ModelGrid);
    this.setState({
      show_bookmarks_view: false
    });
    return this.setQueryItem(query_item);
  }

  onEditorValueChange(val) {
    var editor_error, err, new_data_item, patches;
    boundMethodCheck(this, ModelGrid);
    try {
      new_data_item = JSON.parse(val);
      patches = rfc6902.createPatch(this.state.data_item, new_data_item);
      if (patches.length > 6) {
        editor_error = 'patch count > 6, reduce updates for safety';
      }
      return this.setState({
        editor_patches: patches,
        editor_value: val,
        editor_error: editor_error || null
      });
    } catch (error1) {
      err = error1;
      // console.error err
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

  matchQueryByLabelPart(label) {
    var j, k, len, len1, private_queries, public_queries, q;
    boundMethodCheck(this, ModelGrid);
    public_queries = this.state.public_schema_queries[this.state.schema.name];
    private_queries = this.state.private_schema_queries[this.state.schema.name];
    for (j = 0, len = public_queries.length; j < len; j++) {
      q = public_queries[j];
      if (q.label && q.label.indexOf(label) >= 0) {
        return q;
      }
    }
    for (k = 0, len1 = private_queries.length; k < len1; k++) {
      q = private_queries[k];
      if (q.label && q.label.indexOf(label) >= 0) {
        return q;
      }
    }
    return null;
  }

  setFirstSearchQuery(search_first_query) {
    boundMethodCheck(this, ModelGrid);
    if (this.state.search_first_query !== search_first_query) {
      return this.setState({
        search_first_query: search_first_query
      });
    }
  }

  selectFirstSearchQuery() {
    boundMethodCheck(this, ModelGrid);
    // if @state.search_first_query != search_first_query
    return this.selectQuery(this.state.search_first_query);
  }

  showQueryBuilderHoverBox(bind_el) {
    boundMethodCheck(this, ModelGrid);
    this.setState({
      show_query_builder_view: true
    });
    return this.setHoverBox({
      visible: true,
      show_delay: 0,
      hide_delay: 0,
      flat: true,
      renderContent: (offset_left, offset_top) => {
        // log offset_left,offset_top
        return h(QueryBuilderView, {
          offset_left: offset_left,
          offset_top: offset_top,
          deleteQuery: this.deleteQuery,
          clearQueryInput: this.clearQueryInput,
          editQuery: this.editQuery,
          cloneQuery: this.cloneQuery,
          cloneQueryAndSet: this.cloneQueryAndSet,
          cleanQuery: this.clearQuery,
          saveQuery: this.saveQuery,
          runQuery: this.runQuery,
          matchQueryByLabelPart: this.matchQueryByLabelPart,
          query_item: this.state.query_item,
          keys_array: this.state.schema.keys_array,
          keys: this.state.schema.keys,
          schema: this.state.schema,
          renderHoverBox: this.props.renderHoverBox
        });
      },
      getSize: function() {
        return {
          width: 600,
          height: 688
        };
      },
      getBindElement: () => {
        return bind_el;
      }
    });
  }

  setHoverBox({visible, flat, getBindElement, renderContent, getSize, show_delay, hide_delay}) {
    boundMethodCheck(this, ModelGrid);
    this.state.hoverbox.visible = visible;
    this.state.hoverbox.getBindElement = getBindElement;
    this.state.hoverbox.renderContent = renderContent;
    this.state.hoverbox.getSize = getSize;
    this.state.hoverbox.show_delay = show_delay;
    this.state.hoverbox.hide_delay = hide_delay;
    this.state.hoverbox.flat = flat;
    return this.setState({});
  }

  onSearchInputLabel(val) {
    var ref;
    boundMethodCheck(this, ModelGrid);
    if (this._tabs_view) {
      return (ref = this._tabs_view) != null ? ref.setState({
        search_label: val
      }) : void 0;
    }
  }

  render() {
    var hover_box, ref, style;
    if (!this.state.query_item) {
      this.log('query item missing, skip render');
      return false;
    }
    if (this._pc !== this.context.primary.color[0]) {
      this._pc = this.context.primary.color[0];
      this._pc_is_dark = !Color(this._pc).isDark();
      this._pc_opaque = Color(this._pc).alpha(0.8).rgb().string();
    }
    this.g_props.scroll_to_index = this.state.scroll_to_index;
    this.g_props.bounding_box = (ref = this.base) != null ? ref.getBoundingClientRect() : void 0;
    this.g_props.data = this.state.data.get(this.state.query_item._id) || [];
    // log @g_props.data
    this.g_props.scroll_top = this.state.scroll_top;
    this.g_props.query_map = this.state.query_map;
    this.g_props.query_item = this.state.query_item;
    this.g_props.data_item = this.state.data_item;
    this.g_props.show_title = this.props.show_title;
    this.g_props.show_static_methods = this.props.show_static_methods;
    this.g_props.data_item_id = this.props.data_item_id;
    this.g_props.new_doc = this.state.new_doc;
    this.g_props.mapped_queries_v = this.state.mapped_queries_v;
    this.g_props.queries = this.state.schema_queries[this.state.schema.name];
    this.g_props.query_index = this.state.schema_queries_indices[this.state.schema.name];
    this.g_props.action_query = this.state.action_query;
    this.g_props.schema = this.state.schema;
    this.g_props.row_height = this.state.schema.row_height || 30;
    this.g_props.scroll_query_beta_offset = this.props.scroll_query_beta_offset;
    this.g_props.show_json_view = this.state.show_json_view;
    this.g_props.methods = this.props.methods;
    this.g_props.filter = this.props.filter;
    this.g_props.schema_state = this.state.schema_states[this.state.schema.name];
    this.g_props.public_queries = this.state.public_schema_queries[this.state.schema.name];
    this.g_props.private_queries = this.state.private_schema_queries[this.state.schema.name];
    this.g_props._pc_is_dark = this._pc_is_dark;
    // log @state.bookmarks
    style = {};
    style.visiblity = this.state.is_visible && 'visible' || 'hidden';
    // style.transform = 'translate(0px)'
    style.height = '100%';
    style.width = '100%';
    hover_box = h(Style, {
      primary: '#2c2e30',
      primary_inv: '#fff',
      secondary: '#fff',
      secondary_inv: '#386277'
    }, h(HoverBox, {
      visible: this.state.hoverbox.visible,
      hide_delay: this.state.hoverbox.hide_delay,
      show_delay: this.state.hoverbox.show_delay,
      visible_delay: false,
      onClose: this.state.hoverbox.onClose,
      onClickOverlay: this.state.hoverbox.onClickOverlay || this.state.hoverbox.onClose,
      box_pointer_events: this.state.hoverbox.pointer_events,
      offset_y: 0,
      snap_x: 1,
      align_x: 1,
      align_y: -1,
      snap_y: -1,
      offset_x: 0,
      flat: this.state.hoverbox.flat,
      background: this.context.primary.inv[0],
      renderContent: this.state.hoverbox.renderContent,
      getBindElement: this.state.hoverbox.getBindElement,
      getSize: this.state.hoverbox.getSize
    }));
    return h(Slide, {
      ref: this.baseRef,
      slide: true,
      beta: this.props.beta,
      style: Object.assign(style, this.props.style),
      className: cn(css['model-grid'], 'scrollbar'),
      pos: !this.state.show_json_view && 1 || 0,
      vert: false,
      outerChildren: hover_box
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
      onClick: this.getDataItem
    }), h(Input, {
      type: 'button',
      i: 'close',
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
        background: this.context.primary.inv.darker[4]
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
    }, h(TabsView, {
      selectQuery: this.selectQuery,
      setFirstSearchQuery: this.setFirstSearchQuery,
      query_item: this.state.query_item,
      public_queries: this.g_props.public_queries,
      private_queries: this.g_props.private_queries,
      ref: (el) => {
        return this._tabs_view = el;
      }
    }), h(GridView, this.g_props), h(Style, {
      primary: '#2c2e30',
      primary_inv: '#fff',
      secondary: '#fff',
      secondary_inv: '#386277'
    }, h(SearchView, this.g_props))));
  }

};

ModelGrid.contextType = StyleContext;

ModelGrid.defaultProps = {
  show_bar: true,
  query_limit: 100,
  max_save_local_query_count: 15,
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

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/less-loader/dist/cjs.js??ref--6-2!./ModelGrid.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./components/ModelGrid.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./components/QueryBuilderView.coffee":
/*!********************************************!*\
  !*** ./components/QueryBuilderView.coffee ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Bar, CodeEditor, Color, DragDropContext, Draggable, Droppable, Input, JsonView, KeyChip, MAX_CHAR, Menu, MenuTab, QueryBuilderView, Slide, StyleContext, cn, css, highlight, languages,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({Input, MenuTab, Menu, Bar, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

MAX_CHAR = 32;

({DragDropContext, Droppable, Draggable} = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

JsonView = __webpack_require__(/*! ./JsonView.coffee */ "./components/JsonView.coffee");

CodeEditor = __webpack_require__(/*! react-simple-code-editor */ "./node_modules/react-simple-code-editor/lib/index.js").default;

({highlight, languages} = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js"));

Color = __webpack_require__(/*! color */ "color");

KeyChip = class KeyChip extends Component {
  constructor() {
    super(...arguments);
    this.sortKey = this.sortKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
  }

  async sortKey(key_name, sort_dir) {
    var k_i;
    boundMethodCheck(this, KeyChip);
    k_i = this.props.query_item.layout_keys.indexOf(key_name);
    return (await this.props.setKeyIndex(key_name, k_i, sort_dir));
  }

  removeKey(key_name) {
    boundMethodCheck(this, KeyChip);
    return this.props.setKeyIndex(key_name, -1);
  }

  render() {
    var bg, color, index, key_name, key_obj, key_sort_down, key_sort_up, sort_dir_btn, sort_index_btn, sort_key, sort_key_i;
    ({key_obj, index, sort_key, sort_key_i, key_name} = this.props);
    if (sort_key) {
      if (sort_key.dir < 0) {
        key_sort_down = true;
      } else if (sort_key.dir > 0) {
        key_sort_up = true;
      }
      sort_index_btn = h(Input, {
        type: 'label',
        btn_type: 'primary',
        label: String(sort_key_i + 1)
      });
      sort_dir_btn = h(Input, {
        type: 'button',
        onClick: this.sortKey.bind(this, key_name, (sort_key.dir > 0) && -1 || 1),
        btn_type: key_sort_down && 'false' || 'true',
        i: key_sort_down && 'keyboard_arrow_down' || 'keyboard_arrow_up'
      });
      bg = this.context.secondary.inv[0];
      color = this.context.secondary.color[0];
    } else {
      bg = this.context.primary.inv[1];
      color = this.context.primary.color[0];
    }
    return h(Draggable, {
      draggableId: key_name,
      index: index
    }, (provided, snapshot) => {
      var item_props, item_style;
      item_style = Object.assign({}, provided.draggableProps.style);
      if (item_style.left && this.props.offset_left) {
        item_style.left -= this.props.offset_left;
      }
      if (item_style.top && this.props.offset_top) {
        item_style.top -= this.props.offset_top;
      }
      item_props = Object.assign({
        ref: provided.innerRef
      }, provided.draggableProps, provided.dragHandleProps, {
        className: css['chip-layout-editor-chip-wrap'],
        style: item_style,
        key: key_obj.label
      });
      return h('div', item_props, h('div', {
        className: cn(css['chip-layout-editor-chip'], 'flex-right full-w'),
        style: {
          background: bg,
          color: color
        }
      }, h('i', {
        className: 'material-icons opaque',
        style: {
          fontSize: 14
        }
      }, 'drag_indicator'), h('span', {
        className: 'reg-mono pad-left no-shrink'
      }, key_obj.label), h('div', {
        className: 'full-w flex-left'
      }, h(Input, {
        type: 'button',
        i: 'close',
        btn_type: sort_key && 'primary' || 'default',
        disabled: this.props.query_item.layout_keys.length <= 1,
        onClick: this.removeKey.bind(this, key_name)
      }), sort_dir_btn, sort_index_btn)));
    });
  }

};

KeyChip.contextType = StyleContext;

QueryBuilderView = class QueryBuilderView extends Component {
  constructor(props) {
    super(props);
    this.renderUnusedChip = this.renderUnusedChip.bind(this);
    this.addKey = this.addKey.bind(this);
    this.setKeyIndex = this.setKeyIndex.bind(this);
    this.setNewLayoutNameValue = this.setNewLayoutNameValue.bind(this);
    this.setNewLayoutKeysValue = this.setNewLayoutKeysValue.bind(this);
    this.showNewLayoutForm = this.showNewLayoutForm.bind(this);
    this.hideNewLayoutForm = this.hideNewLayoutForm.bind(this);
    this.submitNewLayoutForm = this.submitNewLayoutForm.bind(this);
    this.mapMenuLayoutButtons = this.mapMenuLayoutButtons.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
    this.dropInSortedProvider = this.dropInSortedProvider.bind(this);
    this.dropInProvider = this.dropInProvider.bind(this);
    this.onEditorValueChange = this.onEditorValueChange.bind(this);
    this.onSetQueryType = this.onSetQueryType.bind(this);
    this.onBookmarkDecriptionInput = this.onBookmarkDecriptionInput.bind(this);
    this.onBookmarkLabelInput = this.onBookmarkLabelInput.bind(this);
    this.toggleSavePublic = this.toggleSavePublic.bind(this);
    this.onSaveQuery = this.onSaveQuery.bind(this);
    this.onSelectQueryKey = this.onSelectQueryKey.bind(this);
    this.state = {
      edit_v: 0,
      save_bookmark_public: this.props.query_item.is_public,
      bookmark_description: this.props.query_item.description,
      unused_keys: props.keys_array.filter((key) => {
        var ref;
        return ((ref = props.query_item) != null ? ref.layout_keys.indexOf(key) : void 0) < 0;
      }),
      bookmark_label: this.props.query_item.label
    };
  }

  // query_saved: props.isSavedQuery(props.query_item)
  compoonentDidUpdate(props) {
    if (this.props.query_item !== props.query_item) {
      return this.setState({
        // query_saved: @props.isSavedQuery(@props.query_item)
        unused_keys: this.props.keys_array.filter((key) => {
          var ref;
          return ((ref = this.props.query_item) != null ? ref.layout_keys.indexOf(key) : void 0) < 0;
        })
      });
    }
  }

  renderUnusedChip(key_name) {
    var key;
    boundMethodCheck(this, QueryBuilderView);
    key = this.props.keys[key_name];
    return h('div', {
      className: 'flex-right',
      key: key_name
    }, h(Input, {
      type: 'button',
      style: {
        width: '100%'
      },
      i: 'add',
      onClick: this.addKey.bind(this, key_name),
      label: key.label
    }));
  }

  addKey(key_name) {
    boundMethodCheck(this, QueryBuilderView);
    return this.setKeyIndex(key_name, this.props.query_item.layout_keys.length);
  }

  async setKeyIndex(key_name, index, sort_dir) {
    var f_i, insert_index, k_i, key_arr, sort_keys;
    boundMethodCheck(this, QueryBuilderView);
    key_arr = [].concat(this.props.query_item.layout_keys);
    k_i = key_arr.indexOf(key_name);
    sort_keys = this.props.query_item.sort_keys;
    if (index >= 0) {
      if (k_i >= 0) {
        key_arr.splice(k_i, 1);
      }
      f_i = _.findIndex(this.props.query_item.sort_keys, {
        key: key_name
      });
      if (sort_dir != null) {
        if (f_i >= 0) {
          sort_keys.splice(f_i, 1);
        }
        sort_keys = [].concat(sort_keys);
        insert_index = Math.min(index, this.props.query_item.sort_keys.length);
        key_arr.splice(insert_index, 0, key_name);
        sort_keys.splice(insert_index, 0, {
          key: key_name,
          dir: sort_dir
        });
      } else {
        if (f_i >= 0) {
          sort_keys.splice(f_i, 1);
        }
        insert_index = index + sort_keys.length;
        key_arr.splice(insert_index, 0, key_name);
      }
    } else {
      key_arr.splice(k_i, 1);
      f_i = _.findIndex(this.props.query_item.sort_keys, {
        key: key_name
      });
      if (f_i >= 0) {
        this.props.query_item.sort_keys.splice(f_i, 1);
      }
    }
    await this.props.editQuery({
      layout_keys: key_arr,
      sort_keys: sort_keys
    });
    return this.setState({
      sorted_provider_key: Date.now()
    });
  }

  setNewLayoutNameValue(e) {
    boundMethodCheck(this, QueryBuilderView);
    return this.setState({
      new_layout_name_value: String(e.target.value).substring(0, MAX_CHAR)
    });
  }

  setNewLayoutKeysValue(e) {
    boundMethodCheck(this, QueryBuilderView);
    return this.setState({
      new_layout_keys_value: e.target.value
    });
  }

  showNewLayoutForm() {
    boundMethodCheck(this, QueryBuilderView);
    return this.setState({
      show_new_layout_form: true
    });
  }

  hideNewLayoutForm() {
    boundMethodCheck(this, QueryBuilderView);
    return this.setState({
      show_new_layout_form: false
    });
  }

  submitNewLayoutForm() {
    boundMethodCheck(this, QueryBuilderView);
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
    boundMethodCheck(this, QueryBuilderView);
    return h(MenuTab, {
      key: i,
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

  onDragEnd(e, n, a) {
    boundMethodCheck(this, QueryBuilderView);
    if (!e.destination) {
      return;
    }
    if (e.destination.droppableId === 'drop-in') {
      if (this.props.schema.force_keys && e.destination.index < this.props.schema.force_keys.length) {
        return false;
      }
    }
    if (e.destination.droppableId === 'drop-out' && e.source.droppableId === 'drop-out') {
      return;
    }
    if (e.destination.droppableId === 'drop-in-sorted') {
      if (!this.props.schema.keys[e.draggableId].indexed) {
        return false;
      }
      // if _.find(@props.query_item.sort_keys,key:e.draggableId)
      if (e.source.droppableId === 'drop-in-sorted') {
        return this.setKeyIndex(e.draggableId, e.destination.index, _.find(this.props.query_item.sort_keys, {
          key: e.draggableId
        }).dir);
      } else {
        return this.setKeyIndex(e.draggableId, e.destination.index, -1);
      }
    } else if (e.destination.droppableId === 'drop-in') {
      return this.setKeyIndex(e.draggableId, e.destination.index);
    }
  }

  getActiveListStyle(dragging) {
    return {
      background: dragging && this.context.primary.color[1] || this.context.primary.color[0],
      width: '100%'
    };
  }

  getListStyle(dragging) {
    return {
      background: dragging && this.context.primary.inv[1] || this.context.primary.inv[0],
      width: '100%'
    };
  }

  getItemStyle(box, index, snapshot, style) {
    var bg, c, left;
    boundMethodCheck(this, QueryBuilderView);
    // log box
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
      left: (style.left + DIM2 * 3) || 0,
      top: (style.top - DIM2 - 64) || 0,
      background: bg,
      color: c
    });
  }

  dropInSortedProvider(provided, snapshot) {
    var props;
    boundMethodCheck(this, QueryBuilderView);
    props = Object.assign({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: css['chip-layout-editor-dropbox-part'],
      style: {
        background: this.context.secondary.inv[1],
        minHeight: DIM2
      }
    });
    return h('div', props, this.props.query_item.sort_keys.map((key, i) => {
      var key_name, sort_key_i;
      key_name = key.key;
      sort_key_i = _.findIndex(this.props.query_item.sort_keys, {
        key: key_name
      });
      return h(KeyChip, {
        key: key_name + '-sorted-' + String(+this.props.query_item.sort_keys[sort_key_i].dir),
        index: i,
        offset_top: this.props.offset_top,
        offset_left: this.props.offset_left,
        setKeyIndex: this.setKeyIndex,
        key_obj: this.props.keys[key_name],
        query_item: this.props.query_item,
        sort_key_i: sort_key_i,
        sort_key: this.props.query_item.sort_keys[sort_key_i],
        key_name: key_name
      });
    }), provided.placeholder);
  }

  dropInProvider(provided, snapshot) {
    var layout_keys, props;
    boundMethodCheck(this, QueryBuilderView);
    props = Object.assign({}, provided.droppableProps, {
      ref: provided.innerRef,
      className: css['chip-layout-editor-dropbox-part']
    });
    layout_keys = this.props.query_item.layout_keys.filter((key_name) => {
      if (!this.props.keys[key_name]) {
        return false;
      }
      if (_.find(this.props.query_item.sort_keys, {
        key: key_name
      })) {
        return false;
      }
      return true;
    });
    return h('div', props, layout_keys.map((key_name, i) => {
      var sort_key_i;
      sort_key_i = _.findIndex(this.props.query_item.sort_keys, {
        key: key_name
      });
      return h(KeyChip, {
        key: key_name,
        index: i,
        offset_top: this.props.offset_top,
        offset_left: this.props.offset_left,
        setKeyIndex: this.setKeyIndex,
        key_obj: this.props.keys[key_name],
        query_item: this.props.query_item,
        sort_key_i: sort_key_i,
        sort_key: this.props.query_item.sort_keys[sort_key_i],
        key_name: key_name
      });
    }), provided.placeholder);
  }

  onEditorValueChange(val) {
    boundMethodCheck(this, QueryBuilderView);
    return this.props.editQuery({
      json_input: val
    });
  }

  onSetQueryType(type) {
    boundMethodCheck(this, QueryBuilderView);
    return this.props.editQuery({
      type: type
    });
  }

  onBookmarkDecriptionInput(e) {
    var v;
    boundMethodCheck(this, QueryBuilderView);
    v = e.target.value;
    return this.setState({
      edit_v: this.state.edit_v + 1,
      bookmark_description: v
    });
  }

  onBookmarkLabelInput(e) {
    var bookmark_exists, v;
    boundMethodCheck(this, QueryBuilderView);
    v = e.target.value;
    bookmark_exists = this.props.matchQueryByLabelPart(v) != null;
    return this.setState({
      bookmark_label: v,
      edit_v: this.state.edit_v + 1,
      bookmark_label_invalid: (bookmark_exists || v.length) < 4 ? true : (!bookmark_exists && v.length >= 4) ? false : void 0
    });
  }

  toggleSavePublic() {
    boundMethodCheck(this, QueryBuilderView);
    return this.setState({
      edit_v: this.state.edit_v + 1,
      save_bookmark_public: !this.state.save_bookmark_public
    });
  }

  onSaveQuery() {
    boundMethodCheck(this, QueryBuilderView);
    if (!this.state.bookmark_label || !this.state.bookmark_description) {
      return false;
    }
    this.props.editQuery({
      label: this.state.bookmark_label,
      description: this.state.bookmark_description,
      is_public: this.state.save_bookmark_public
    });
    this.props.saveQuery();
    return this.props.runQuery();
  }

  onSelectQueryKey(e) {
    boundMethodCheck(this, QueryBuilderView);
    return this.props.editQuery({
      search_key: e.target.value
    }, this.props.query_item);
  }

  render() {
    var bookmark_description, bookmark_label_input, clone_query_btn, delete_bookmark_button, qi, query_editor, query_title_label, save_query_btn, select_query_key_btn;
    qi = this.props.query_item;
    if (this._pc !== this.context.primary.color[0]) {
      this._pc = this.context.primary.color[0];
      this._pc_is_dark = !Color(this._pc).isDark();
      this._pc_opaque = Color(this._pc).alpha(0.8).rgb().string();
    }
    // if !@state.bookmark_description?
    // 	@state.bookmark_description = qi.description

    // if !@state.bookmark_label?
    // 	@state.bookmark_label = qi.label
    this.state.unused_keys = this.props.keys_array.filter((key) => {
      return this.props.query_item.layout_keys.indexOf(key) < 0;
    });
    if (qi.type === 'keyword') {
      select_query_key_btn = h(Input, {
        type: 'select',
        value: qi.search_key,
        btn_type: 'primary',
        onInput: this.onSelectQueryKey,
        i: 'title',
        options: this.props.schema.keys_array.map((key_name) => {
          var key;
          key = this.props.schema.keys[key_name];
          return h('option', {
            key: key_name,
            value: key_name
          }, key.label);
        })
      });
    }
    if (qi.type === 'json') {
      query_editor = h('div', {
        className: cn(css['react-json-container'], css['light'], 'hide-scrollbar')
      }, h(CodeEditor, {
        value: this.props.query_item.json_input || '',
        onValueChange: this.onEditorValueChange,
        highlight: function(code) {
          return highlight(code, languages.javascript);
        },
        padding: 13,
        style: {
          fontFamily: 'monor, monospace',
          height: 'fit-content',
          fontSize: 13
        }
      }));
    } else {
      // log qi.search_key,@props.schema.keys[qi.search_key]
      query_editor = h('div', {
        className: 'full center flex-right'
      }, h(Input, {
        type: 'input',
        i: 'search',
        big: true,
        btn_type: 'flat',
        onInput: (e) => {
          return this.props.editQuery({
            keyword_input: e.target.value
          });
        },
        value: qi.keyword_input,
        style: {
          padding: '10px 20px'
        },
        placeholder: 'Search by ' + this.props.schema.keys[qi.search_key].label
      }));
    }
    bookmark_description = h(Input, {
      type: 'textarea',
      label: 'bookmark description',
      value: this.state.bookmark_description,
      // onBlur: @onSaveQuery
      style: {
        maxHeight: '60px'
      },
      placeholder: 'add a descriptive name to save the bookmark',
      onInput: this.onBookmarkDecriptionInput
    });
    bookmark_label_input = h(Bar, {
      btn: true,
      big: true
    }, h(Input, {
      type: 'input',
      i: 'bookmark',
      big: true,
      bar: true,
      onInput: this.onBookmarkLabelInput,
      placeholder: 'Bookmark Name',
      invalid: this.state.bookmark_label_invalid,
      value: this.state.bookmark_label
    }), h(Input, {
      type: 'checkbox',
      btn_type: this.state.save_bookmark_public && 'primary',
      onClick: this.toggleSavePublic,
      checked: this.state.save_bookmark_public,
      checkbox_type: 'circle',
      i: 'public'
    }));
    if (qi.updated_at) {
      delete_bookmark_button = h(Input, {
        type: 'button',
        i: 'delete',
        big: true,
        onClick: this.props.deleteQuery,
        btn_type: 'false',
        label: 'delete'
      });
    }
    if (qi.called_at) {
      clone_query_btn = h(Input, {
        type: 'button',
        i: 'playlist_add',
        onClick: this.props.cloneQueryAndSet,
        margin_left: false,
        margin_right: true,
        // btn_type: 'true'
        label: 'clone',
        big: true
      });
    } else {
      clone_query_btn = h(Input, {
        type: 'button',
        i: 'sync',
        label: 'reset',
        onClick: this.props.clearQuery,
        margin_left: false,
        margin_right: true,
        // btn_type: 'true'
        big: true
      });
    }
    if (this.state.edit_v && this.state.bookmark_description && this.state.bookmark_label) {
      save_query_btn = h(Input, {
        i: 'save',
        label: 'save',
        big: true,
        margin_left: true,
        margin_right: false,
        type: 'button',
        btn_type: 'true',
        onClick: this.onSaveQuery
      });
    }
    query_title_label = h(Input, {
      type: 'label',
      label: qi._id,
      margin_right: true,
      btn_type: 'flat',
      big: true,
      i: qi.type === 'json' && 'code' || 'search'
    });
    return h('div', {
      className: 'flex-down full',
      key: this.props.query_item._id
    }, h('div', {
      className: 'flex-right pad-bottom'
    }, h('div', {
      className: 'flex-right',
      style: {
        width: '100%'
      }
    }, clone_query_btn), h('div', {
      className: 'flex-left',
      style: {
        width: '100%'
      }
    }, save_query_btn)), h('div', {
      className: cn('card full-w box-shadow'),
      style: {
        transform: 'none',
        background: this.context.primary.inv[0]
      }
    }, h('div', {
      className: 'flex-right full',
      style: {
        height: 350 - DIM * 2,
        background: this.context.primary.inv[1]
      }
    }, h('div', {
      className: cn('flex-down full', css['chip-layout-editor-dropbox'], 'slim-scrollbar'),
      style: {
        background: this.context.primary.inv[0]
      }
    }, h(DragDropContext, {
      onDragEnd: this.onDragEnd
    }, h(Droppable, {
      droppableId: 'drop-in-sorted',
      droppableKey: this.state.sorted_provider_key
    }, this.dropInSortedProvider), h(Droppable, {
      droppableId: 'drop-in',
      droppableKey: this.state.sorted_provider_key
    }, this.dropInProvider))), h('div', {
      className: cn(css['chip-layout-editor-dropbox'], 'mpad'),
      style: {
        background: this.context.primary.inv[1],
        width: '65%'
      }
    }, this.state.unused_keys.map((key_name, i) => {
      if (!this.props.keys[key_name]) {
        return null;
      }
      return this.renderUnusedChip(key_name, this.props.keys[key_name]);
    }))), h('div', {
      className: 'flex-down',
      style: {
        height: DIM * 6,
        transform: 'translate(0)',
        borderTop: '2px solid ' + this.context.primary.inv[2],
        background: this.context.primary.inv[0]
      }
    }, query_editor, h('div', {
      className: 'top-right mpad flex-left'
    }, h(Input, {
      type: 'button',
      i: 'code',
      onClick: this.onSetQueryType.bind(this, 'json'),
      btn_type: this.props.query_item.type === 'json' && 'primary' || 'flat'
    }), h(Input, {
      type: 'button',
      i: 'search',
      onClick: this.onSetQueryType.bind(this, 'keyword'),
      btn_type: this.props.query_item.type === 'keyword' && 'primary' || 'flat'
    })), h('div', {
      className: 'top-left mpad'
    }, select_query_key_btn), h('div', {
      className: 'bot-right mpad flex-right'
    }, h('span', {
      className: 'mpad small-mono-fat',
      style: {
        color: this.context.primary.color[2]
      }
    }, qi._id), h(Input, {
      type: 'button',
      i: 'refresh',
      btn_type: !qi.json_input && !qi.keyword_input && 'flat' || 'primary',
      disabled: !qi.json_input && !qi.keyword_input,
      onClick: this.props.clearQueryInput
    })), h('div', {
      className: 'bot-left pad'
    }, h('span', {
      className: 'small-mono',
      style: {
        color: this.context.primary.inv[3]
      }
    }, 'using ' + this.props.query_item.type), this.props.query_item.type === 'json' && h('span', {
      className: 'small-mono-fat pad-left',
      style: {
        color: this.props.query_item.error && this.context.primary.false || this.context.primary.true
      }
    }, this.props.query_item.error || 'ok'))), h('div', {
      className: 'flex-down pad',
      style: {
        background: this.context.primary.inv[0],
        height: '100%'
      }
    }, bookmark_description, h('div', {
      className: 'flex-right'
    }, bookmark_label_input, delete_bookmark_button))));
  }

};

QueryBuilderView.contextType = StyleContext;

module.exports = QueryBuilderView;


/***/ }),

/***/ "./components/SearchView.coffee":
/*!**************************************!*\
  !*** ./components/SearchView.coffee ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AlertDot, Bar, Input, MAX_CHAR, Menu, MenuTab, SEARCH_BAR_WIDTH, SearchView, Slide, SquareLoader, StyleContext, cn, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

Slide = __webpack_require__(/*! re-slide */ "re-slide");

({AlertDot, Input, MenuTab, Menu, Bar, SquareLoader, StyleContext} = __webpack_require__(/*! re-lui */ "re-lui"));

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

cn = __webpack_require__(/*! classnames */ "classnames");

MAX_CHAR = 32;

SEARCH_BAR_WIDTH = 400;

SearchView = class SearchView extends Component {
  constructor(props) {
    var ref, ref1;
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSearchEnter = this.onSearchEnter.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.searchRef = this.searchRef.bind(this);
    this.toggleQueryInterval = this.toggleQueryInterval.bind(this);
    this.onShowLayoutHoverBox = this.onShowLayoutHoverBox.bind(this);
    this.state = {
      search_v: 0,
      search_value: (((ref = props.query_item) != null ? ref.updated_at : void 0) && '#' + props.query_item.label) || ((ref1 = props.query_item) != null ? ref1.keyword_input : void 0) || ""
    };
  }

  onFocus() {
    boundMethodCheck(this, SearchView);
    setTimeout(() => {
      this._search.select();
      return this._search.focus();
    }, 0);
    if (this.state.run_query_interval) {
      return this.toggleQueryInterval();
    }
  }

  async onSearchEnter() {
    boundMethodCheck(this, SearchView);
    // log @state.search_value
    if (this.state.search_value[0] === '#' && this.state.search_v) {
      return this.props.selectFirstSearchQuery();
    } else {
      if (this.props.query_item) {
        if (this.props.query_item.called_at) {
          await this.props.cloneQueryAndSet({
            keyword_input: this.state.search_value
          });
        } else {
          await this.props.editQuery({
            keyword_input: this.state.search_value
          });
        }
        return this.props.runQuery();
      }
    }
  }

  UNSAFE_componentWillUpdate(props, state) {
    if (this.props.query_item !== props.query_item || this.props.mapped_queries_v !== props.mapped_queries_v) {
      if (props.query_item.updated_at) {
        return state.search_value = '#' + props.query_item.label;
      } else {
        return state.search_value = props.query_item.keyword_input || "";
      }
    }
  }

  setSearchValue(e) {
    var ref;
    boundMethodCheck(this, SearchView);
    this.setState({
      query_item: void 0,
      search_v: this.state.search_v + 1,
      search_value: e.target.value
    });
    if (((ref = e.target.value) != null ? ref[0] : void 0) === '#') {
      return this.props.onSearchInputLabel(e.target.value && e.target.value.substring(1) || "");
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

  onShowLayoutHoverBox(e) {
    boundMethodCheck(this, SearchView);
    return this.props.showQueryBuilderHoverBox(this._week_btn);
  }

  render() {
    var autofill_label, bar_style, edit_doc_json_button, props, qi, query_item_is_loading, search_input, state;
    props = this.props;
    state = this.state;
    qi = props.query_item;
    query_item_is_loading = qi.called_at && !qi.completed_at;
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
    if (this.state.search_value[0] === '#') {
      if (this.state.autofill_label) {
        autofill_label = '#' + this.state.autofill_label;
      }
    }
    search_input = h(Bar, {
      big: true,
      btn: true,
      className: 'shadow ' + css['search-input']
    }, h(Input, {
      onFocus: this.onFocus,
      ref: this.searchRef,
      type: 'text',
      input_props: {
        autoComplete: 'false',
        spellCheck: 'false',
        autoCorrect: 'false',
        autoCapitalize: 'false',
        onKeyDown: (e) => {
          // log e.nativeEvent.code
          if (e.nativeEvent.code === "Escape") {
            return this._search.blur();
          } else if (e.nativeEvent.code === "Enter") {
            return this.onSearchEnter();
          }
        }
      },
      i: 'search',
      style: {
        width: SEARCH_BAR_WIDTH - 40 - 40
      },
      value: this.state.search_value,
      overlay_input: autofill_label,
      bar_style: bar_style,
      onInput: this.setSearchValue,
      // onEnter: @onSearchEnter
      bar: true,
      placeholder: 'keyword | #saved'
    }));
    edit_doc_json_button = h(Input, {
      type: 'button',
      i: 'edit',
      className: 'shadow',
      btn_type: !this.props.data_item_id && 'flat',
      big: true,
      disabled: true
    });
    // disabled: !@props.data_item_id
    return h('div', {
      className: 'overlay'
    }, h('div', {
      className: 'flex-right pad2 bot-left',
      style: {
        paddingTop: 0
      }
    }, h(Input, {
      type: 'button',
      onClick: this.onShowLayoutHoverBox,
      btn_type: this.props.query_item.updated_at && 'true',
      // label: @props.query_item.updated_at && @props.query_item.label
      i: 'build',
      big: true,
      ref: (el) => {
        if (el) {
          return this._week_btn = el._outer;
        }
      }
    })), h('div', {
      className: 'flex-right pad2 bot-center',
      style: {
        paddingTop: 0
      }
    }, h(Input, {
      type: 'button',
      i: 'keyboard_arrow_left',
      disabled: this.props.query_index === 0,
      onClick: this.props.navPrevQuery
    }), search_input, h(Input, {
      type: 'button',
      disabled: this.props.query_index === this.props.queries.length - 1,
      i: 'keyboard_arrow_right',
      onClick: this.props.navNextQuery
    })), h('div', {
      className: 'pad2 bot-right'
    }, edit_doc_json_button));
  }

};

SearchView.contextType = StyleContext;

module.exports = SearchView;


/***/ }),

/***/ "./components/TabsView.coffee":
/*!************************************!*\
  !*** ./components/TabsView.coffee ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TabsView, cn, css,
  boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

cn = __webpack_require__(/*! classnames */ "classnames");

css = __webpack_require__(/*! ./ModelGrid.less */ "./components/ModelGrid.less");

TabsView = class TabsView extends Component {
  constructor(props) {
    super(props);
    this.selectQuery = this.selectQuery.bind(this);
    this.renderTab = this.renderTab.bind(this);
    this.state = {
      rendered_labels_str: []
    };
  }

  selectQuery(qi) {
    boundMethodCheck(this, TabsView);
    this.props.selectQuery(qi);
    return this.setState({
      search_label: null
    });
  }

  renderTab(qi) {
    var btn_style, i_color, part_spans, search_parts;
    boundMethodCheck(this, TabsView);
    if (!this._first_query) {
      this._first_query = qi;
    }
    part_spans = [];
    if (this.state.search_label) {
      search_parts = this.state.search_label.split(' ');
      qi.label.split(' ').map((label_part, i) => {
        var f_i, found_part, j, len, search_part;
        for (j = 0, len = search_parts.length; j < len; j++) {
          search_part = search_parts[j];
          f_i = label_part.indexOf(search_part);
          if (f_i >= 0) {
            found_part = search_part;
            break;
          }
        }
        if (f_i >= 0) {
          part_spans.push(label_part.substring(0, f_i));
          part_spans.push(h('span', {
            key: found_part,
            style: {
              color: 'black',
              background: 'yellow'
            }
          }, found_part));
          return part_spans.push(label_part.substring(f_i + found_part.length, label_part.length));
        } else {
          return part_spans.push(h('span', {
            key: label_part,
            className: 'pre'
          }, (i !== 0 && ' ' || '') + label_part + ' '));
        }
      });
    } else {
      part_spans = [qi.label];
    }
    if (this.props.query_item._id === qi._id && qi._v === this.props.query_item._v) {
      i_color = this.context.primary.inv[3];
      btn_style = {
        background: this.context.primary.color[0],
        color: this.context.primary.inv[0],
        width: 260,
        cursor: 'default'
      };
    } else {
      i_color = this.context.primary.color[3];
      btn_style = {
        background: this.state.hover_tab === qi._id && this.context.primary.inv[2] || this.context.primary.inv[1],
        color: this.context.primary.color[0],
        width: 260,
        cursor: 'pointer'
      };
    }
    // if !part_spans && @state.search_label
    return h('div', {
      className: 'lui-btn pad flex-down flex-start ' + css['tab-btn'],
      key: qi._id,
      style: btn_style,
      onMouseEnter: () => {
        return this.setState({
          hover_tab: qi._id
        });
      },
      onMouseLeave: () => {
        return this.setState({
          hover_tab: void 0
        });
      },
      onClick: this.selectQuery.bind(this, qi)
    }, h('span', {
      className: cn('mid-reg-fat', css['tab-title']),
      style: {
        borderColor: btn_style.color
      }
    }, part_spans), h('span', {
      className: 'small-mono'
    }, qi.description), qi.is_public && (h('span', {
      className: 'material-icons top-right pad',
      style: {
        color: i_color,
        fontSize: '16px'
      }
    }, 'public')) || null);
  }

  filterAndCombineQueries() {
    var arr, match_regex, search_label_parts;
    this.state.rendered_labels_str = [];
    arr = [].concat(this.props.private_queries, this.props.public_queries);
    if (this.state.search_label) {
      search_label_parts = this.state.search_label.split(' ').map(function(part) {
        return "\\b" + part;
      });
      match_regex = new RegExp(`${search_label_parts.join('|')}`, "ig");
      this._first_query = null;
      return arr.filter((qi, i) => {
        var test;
        test = match_regex.test(qi.label);
        // log test
        if (test) {
          this.state.rendered_labels_str.push(qi.label);
        }
        return test;
      }).map(this.renderTab);
    } else {
      return arr.map(this.renderTab);
    }
  }

  componentDidUpdate() {}

  // log @state.rendered_labels_str
  componentDidUpdate(props) {
    if (props.query_item !== this.props.query_item) {
      this.setState({
        search_label: null
      });
    }
    return this.props.setFirstSearchQuery(this._first_query);
  }

  render() {
    var query_tabs;
    query_tabs = this.filterAndCombineQueries();
    if (!query_tabs.length) {
      if (!this.props.private_queries.length && !this.props.public_queries.length) {
        query_tabs = h('div', {
          className: 'center full-w'
        }, h(Input, {
          big: true,
          style: {
            height: DIM * 2
          },
          type: 'label',
          label: 'no bookmarks, create with'
        }, h('i', {
          className: 'material-icons',
          style: {
            paddingLeft: PAD
          }
        }, 'menu_open')));
      } else {
        // h Input,
        // 	i: 'menu_open'
        // 	type: 'label'
        // 	btn_type: 'flat'
        query_tabs = h('div', {
          className: 'flex-right pad2'
        }, 'no results for #' + this.state.search_label);
      }
    }
    return h(Slide, {
      dim: DIM2 * 3,
      vert: false,
      scroll: true,
      className: 'scrollbar pad'
    }, query_tabs);
  }

};

TabsView.contextType = StyleContext;

module.exports = TabsView;


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
/*! exports provided: calculateBox, createBox, expand, getBox, getRect, offset, shrink, withScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBox", function() { return calculateBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBox", function() { return createBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBox", function() { return getBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrink", function() { return shrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
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

  if (suffix !== 'px') {
    return 0;
  }

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./components/ModelGrid.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/less-loader/dist/cjs.js??ref--6-2!./components/ModelGrid.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lui-g-model-grid {\n  font-family: \"monor\", monospace;\n  font-size: 13px;\n  height: 100%;\n  width: 100%;\n}\n.lui-g-tab-title {\n  border-bottom: 3px solid;\n  width: 33%;\n  overflow: visible;\n  margin-bottom: 7.5px;\n  padding-bottom: 3.75px;\n}\n.lui-g-move-guide-wrapper {\n  width: 100%;\n  height: 100%;\n  cursor: move;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.lui-g-move-guide {\n  pointer-events: none;\n  width: 3px;\n  position: fixed;\n  height: 100%;\n  background: white;\n  display: flex;\n}\n.lui-g-move-guide-key {\n  pointer-events: none;\n  width: 100%;\n}\n.lui-g-bookmark-label {\n  padding: 7.5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.6);\n}\n.lui-g-calendar-day-key {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lui-g-calendar-week-month-title {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 100%;\n}\n.lui-g-calendar-week-row {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n}\n.lui-g-calendar-week-day {\n  font-family: \"monor\", monospace;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.lui-g-calendar-week-day-date-full {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.lui-g-calendar-week-day-date-full {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.lui-g-model-grid-wrap {\n  transform: translate(0);\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-statics-view {\n  width: 400px;\n  min-height: 250px;\n}\n.lui-g-model-grid-slash {\n  opacity: 0.4;\n  padding: 0px 4px;\n}\n.lui-g-model-grid-slash-right {\n  opacity: 0.4;\n  padding-right: 4;\n}\n.lui-g-model-grid-key {\n  align-items: center;\n  display: flex;\n}\n.lui-g-model-grid-key-toggle {\n  height: 100%;\n  display: flex;\n  line-height: 30px;\n  padding-left: 6px;\n  align-items: center;\n  position: absolute;\n  right: 30px;\n}\n.lui-g-model-grid-key-toggle i {\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n  cursor: pointer;\n}\n.lui-g-model-grid-key-toggle i:hover {\n  opacity: 1;\n}\n.lui-g-model-grid-key-toggle i.lui-g-active {\n  opacity: 1;\n}\n.lui-g-model-grid-key-resize {\n  padding-right: 4px;\n  cursor: col-resize;\n  position: absolute;\n  right: 0;\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n}\n.lui-g-model-grid-key-resize:hover {\n  opacity: 1;\n}\n.lui-g-model-grid-slide {\n  width: 100%;\n  height: 100%;\n}\n.lui-g-model-grid-opaque {\n  opacity: 0.5;\n}\n.lui-g-model-grid-add-doc-form {\n  max-height: 300px;\n  height: fit-content;\n  overflow-y: scroll;\n}\n.lui-g-search-query-menu-search-label {\n  white-space: nowrap;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.lui-g-search-query-error {\n  color: red;\n  background: rgba(0, 0, 0, 0.5);\n}\n.lui-g-model-grid-label-float-right {\n  right: 10px;\n  position: absolute;\n}\n.lui-g-model-grid-search-bookmark-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-family: \"monor\", monospace;\n  opacity: 0.8;\n}\n.lui-g-model-grid-search-bookmark-item:hover {\n  opacity: 1;\n}\n.lui-g-search-input ::selection {\n  background: yellow;\n}\n.ReactVirtualized__Grid__innerScrollContainer {\n  min-width: 100%;\n}\n.lui-g-model-grid-cell-method-button {\n  width: 30px !important;\n}\n.lui-g-search-query-item-label2 {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 5px;\n  transform: scale(0.8);\n  max-width: 200px;\n  min-width: 20px;\n  min-height: 20px;\n}\n.lui-g-search-query-item-label2 .lui-g-search-query-error {\n  overflow-x: scroll;\n  overflow-y: visible;\n  padding: 5px;\n}\n.lui-g-search-query-item-label {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  opacity: 0.7;\n  padding: 8px;\n  padding-right: 14px;\n  right: 0;\n  top: 0;\n}\n.lui-g-search-query-item-label i {\n  font-size: 16px;\n  padding-right: 6px;\n}\n.lui-g-model-grid-search-query-l-item {\n  height: auto !important;\n  min-height: 30px;\n  font-family: \"monor\", monospace;\n}\n.lui-g-model-grid-search-query-l-item .lui-g-json {\n  position: relative;\n  min-height: 30px;\n  margin: 0;\n  overflow-wrap: break-word;\n  padding: 8px;\n  font-size: 11px;\n  color: grey;\n  cursor: pointer;\n  white-space: pre;\n}\n* {\n  outline: none;\n}\n.lui-g-menu-slide {\n  overflow: visible !important;\n}\n.lui-g-model-grid-cell-method-button {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px !important;\n  width: 30px;\n  opacity: 0.2;\n  transition: opacity 0.3s;\n  cursor: pointer;\n}\n.lui-g-model-grid-cell-method-button.lui-g-model-grid-cell-selected {\n  opacity: 1;\n  font-size: 26px;\n  font-weight: 600;\n}\n.lui-g-model-grid-cell-method-button:hover {\n  opacity: 1;\n}\n.lui-g-search-keys-container {\n  width: auto;\n  height: 100%;\n  max-height: 300px;\n  min-width: 300px;\n  overflow-y: scroll;\n}\n.lui-g-search-keys-container .lui-label {\n  width: 100% !important;\n}\n.lui-g-search-query-menu-icon {\n  transform: translate(0, 0);\n  cursor: pointer;\n}\n.lui-g-search-query-menu-icon i {\n  margin: 0;\n}\n.lui-g-model-grid-search-query-view {\n  width: 400px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n}\n.lui-g-data-item-method-menu {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n}\n.lui-g-grid-item-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5px;\n}\n.lui-g-model-grid-cell {\n  display: flex;\n  cursor: pointer;\n  height: 100%;\n  align-items: center;\n  vertical-align: middle;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  padding: 0px 10px;\n}\n.lui-g-model-grid-cell .lui-g-model-grid-label {\n  float: left;\n}\n.lui-g-model-grid-cell .lui-g-model-grid-label i {\n  font-size: 11px;\n  line-height: 30px;\n  align-content: center;\n  vertical-align: middle;\n}\n.lui-g-model-grid-cell input {\n  font-family: \"monor\", monospace;\n  font-size: 13px;\n  margin-left: -10px;\n  transition: background 0.3s ease;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  outline: none;\n}\n.lui-g-model-grid-cell input::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.lui-g-tab-btn {\n  cursor: pointer;\n}\n.lui-g-chip-layout-editor-dropbox {\n  width: -webkit-fill-available;\n  height: 100%;\n  overflow-y: scroll;\n}\n.lui-g-chip-layout-editor-dropbox-part {\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n  min-height: 50%;\n  padding: 3.75px;\n  flex-shrink: 0;\n}\n.lui-g-chip-layout-editor-chip {\n  margin: 0;\n  border-radius: 3.75px;\n  padding-left: 7.5px;\n  width: -webkit-fill-available;\n}\n.lui-g-chip-layout-editor-chip-wrap {\n  padding: 3.75px;\n  width: -webkit-fill-available;\n}\n.lui-g-react-json-wrap {\n  position: relative;\n  transform: translate(0);\n}\n.lui-g-react-json-container {\n  overflow: scroll;\n}\n.lui-g-react-json-container.lui-g-dark .number {\n  color: #ff7a00;\n}\n.lui-g-react-json-container.lui-g-dark .string {\n  color: #32e03f;\n}\n.lui-g-react-json-container.lui-g-dark .property {\n  color: #e7e7e7;\n}\n.lui-g-react-json-container.lui-g-dark .operator,\n.lui-g-react-json-container.lui-g-dark .punctuation {\n  color: #929292;\n}\n.lui-g-react-json-container.lui-g-light .keyword {\n  color: #00659b;\n}\n.lui-g-react-json-container.lui-g-light .number {\n  color: #a14e03;\n}\n.lui-g-react-json-container.lui-g-light .string {\n  color: #1c7122;\n}\n.lui-g-react-json-container.lui-g-light .property {\n  color: #121212;\n}\n.lui-g-react-json-container.lui-g-light .operator,\n.lui-g-react-json-container.lui-g-light .punctuation {\n  color: #878787;\n}\n.lui-g-json-editor-menu {\n  position: fixed !important;\n  height: fit-content !important;\n  width: fit-content !important;\n  bottom: 8px;\n  margin: 0px;\n  left: 0px;\n  right: unset;\n}\n.lui-g-json-editor-menu.lui-g-vert {\n  top: 0px;\n  right: 8px;\n  left: unset;\n}\n.lui-g-model-grid-list-menu-right {\n  width: 100%;\n  flex-shrink: 1 !important;\n  flex-direction: row-reverse;\n}\n.lui-g-model-grid-list-layout-button {\n  width: 140px;\n}\n.lui-g-layouts-list-container {\n  position: relative;\n  overflow-y: scroll;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\nods-list-container-scroll-wrap {\n  transform: translate(0);\n  max-height: 300px;\n  height: 100%;\n  width: 100%;\n  min-width: 500px;\n}\n.lui-g-methods-list-container-scroll {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: relative;\n}\n.lui-g-methods-list-container-box {\n  display: block;\n  transition: background 0.3s ease;\n  overflow: visible;\n  flex-direction: column;\n  height: auto;\n  z-index: 1;\n  width: 100%;\n  min-height: 300px;\n}\n.lui-g-methods-list-container {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  height: fit-content;\n}\n.lui-g-methods-list-container-item {\n  display: flex;\n  z-index: 10;\n  min-height: 30;\n  vertical-align: center;\n  padding: 0px 7.5px;\n  align-items: center;\n  cursor: pointer;\n}\n.lui-g-methods-list-container-item::before {\n  content: '=';\n  opacity: 0.3;\n  padding-right: 7.5px;\n}\n.lui-g-methods-list-container-item.lui-g-locked::before {\n  content: '•';\n  opacity: 1;\n  padding-right: 7.5px;\n}\n.lui-g-methods-list-render-view {\n  overflow-y: scroll;\n  min-height: 100%;\n  padding: 7.5px;\n}\n.lui-g-bookmarks-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n.lui-g-vert-right-bar {\n  border-radius: 3.75px;\n  width: 7.5px;\n  height: 60px;\n  position: absolute;\n  right: 16.25px;\n  top: calc(50% - 30px);\n}\n.lui-g-vert-left-bar {\n  border-radius: 3.75px;\n  width: 7.5px;\n  height: 60px;\n  position: absolute;\n  left: 16.25px;\n  top: calc(50% - 30px);\n}\n.lui-g-overlay-label-button {\n  position: fixed !important;\n  margin: 12px !important;\n  left: 0 !important;\n  top: 0 !important;\n}\n.lui-g-overlay-label-button * {\n  color: inherit !important;\n}\n", ""]);
// Exports
exports.locals = {
	"model-grid": "lui-g-model-grid",
	"tab-title": "lui-g-tab-title",
	"move-guide-wrapper": "lui-g-move-guide-wrapper",
	"move-guide": "lui-g-move-guide",
	"move-guide-key": "lui-g-move-guide-key",
	"bookmark-label": "lui-g-bookmark-label",
	"calendar-day-key": "lui-g-calendar-day-key",
	"calendar-week-month-title": "lui-g-calendar-week-month-title",
	"calendar-week-row": "lui-g-calendar-week-row",
	"calendar-week-day": "lui-g-calendar-week-day",
	"calendar-week-day-date-full": "lui-g-calendar-week-day-date-full",
	"model-grid-wrap": "lui-g-model-grid-wrap",
	"model-grid-statics-view": "lui-g-model-grid-statics-view",
	"model-grid-slash": "lui-g-model-grid-slash",
	"model-grid-slash-right": "lui-g-model-grid-slash-right",
	"model-grid-key": "lui-g-model-grid-key",
	"model-grid-key-toggle": "lui-g-model-grid-key-toggle",
	"active": "lui-g-active",
	"model-grid-key-resize": "lui-g-model-grid-key-resize",
	"model-grid-slide": "lui-g-model-grid-slide",
	"model-grid-opaque": "lui-g-model-grid-opaque",
	"model-grid-add-doc-form": "lui-g-model-grid-add-doc-form",
	"search-query-menu-search-label": "lui-g-search-query-menu-search-label",
	"search-query-error": "lui-g-search-query-error",
	"model-grid-label-float-right": "lui-g-model-grid-label-float-right",
	"model-grid-search-bookmark-item": "lui-g-model-grid-search-bookmark-item",
	"search-input": "lui-g-search-input",
	"model-grid-cell-method-button": "lui-g-model-grid-cell-method-button",
	"search-query-item-label2": "lui-g-search-query-item-label2",
	"search-query-item-label": "lui-g-search-query-item-label",
	"model-grid-search-query-l-item": "lui-g-model-grid-search-query-l-item",
	"json": "lui-g-json",
	"menu-slide": "lui-g-menu-slide",
	"model-grid-cell-selected": "lui-g-model-grid-cell-selected",
	"search-keys-container": "lui-g-search-keys-container",
	"search-query-menu-icon": "lui-g-search-query-menu-icon",
	"model-grid-search-query-view": "lui-g-model-grid-search-query-view",
	"data-item-method-menu": "lui-g-data-item-method-menu",
	"grid-item-label": "lui-g-grid-item-label",
	"model-grid-cell": "lui-g-model-grid-cell",
	"model-grid-label": "lui-g-model-grid-label",
	"tab-btn": "lui-g-tab-btn",
	"chip-layout-editor-dropbox": "lui-g-chip-layout-editor-dropbox",
	"chip-layout-editor-dropbox-part": "lui-g-chip-layout-editor-dropbox-part",
	"chip-layout-editor-chip": "lui-g-chip-layout-editor-chip",
	"chip-layout-editor-chip-wrap": "lui-g-chip-layout-editor-chip-wrap",
	"react-json-wrap": "lui-g-react-json-wrap",
	"react-json-container": "lui-g-react-json-container",
	"dark": "lui-g-dark",
	"light": "lui-g-light",
	"json-editor-menu": "lui-g-json-editor-menu",
	"vert": "lui-g-vert",
	"model-grid-list-menu-right": "lui-g-model-grid-list-menu-right",
	"model-grid-list-layout-button": "lui-g-model-grid-list-layout-button",
	"layouts-list-container": "lui-g-layouts-list-container",
	"methods-list-container-scroll": "lui-g-methods-list-container-scroll",
	"methods-list-container-box": "lui-g-methods-list-container-box",
	"methods-list-container": "lui-g-methods-list-container",
	"methods-list-container-item": "lui-g-methods-list-container-item",
	"locked": "lui-g-locked",
	"methods-list-render-view": "lui-g-methods-list-render-view",
	"bookmarks-container": "lui-g-bookmarks-container",
	"vert-right-bar": "lui-g-vert-right-bar",
	"vert-left-bar": "lui-g-vert-left-bar",
	"overlay-label-button": "lui-g-overlay-label-button"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
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
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


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
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


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
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
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

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document) {
				return document.currentScript;
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
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
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
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

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
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
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentNode;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
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
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (target && target == token + ',' + j) {
					return;
				}

				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
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

						var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
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
						_.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
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
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
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
		return _;
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

	return _;
}

//Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

if (!_.manual) {
	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/components/prism-javascript.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),

/***/ "./node_modules/prismjs/components/prism-json.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.json = {
	'property': {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		greedy: true
	},
	'string': {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		greedy: true
	},
	'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
	'number': /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:true|false)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};


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
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

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
      if (has(typeSpecs, typeSpecName)) {
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
          );
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

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
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



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
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
    elementType: createElementTypeTypeChecker(),
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

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (has(propValue, key)) {
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

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
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
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
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
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
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
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ __webpack_exports__["default"] = (rafSchd);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/*! exports provided: DragDropContext, Draggable, Droppable, resetServerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropContext", function() { return DragDropContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return PublicDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return ConnectedDroppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetServerContext", function() { return resetServerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);











var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
function log(type, message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console)[type].apply(_console, getFormattedMessage(message));
}
var warning = log.bind(null, 'warn');
var error = log.bind(null, 'error');

function noop() {}

function getOptions(shared, fromBinding) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, shared, {}, fromBinding);
}

function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function (unbind) {
      unbind();
    });
  };
}

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
function RbdInvariant(message) {
  this.message = message;
}

RbdInvariant.prototype.toString = function toString() {
  return this.message;
};

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(prefix + ": " + (message || ''));
  }
}

var ErrorBoundary = function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;

    _this.onWindowError = function (event) {
      var callbacks = _this.getCallbacks();

      if (callbacks.isDragging()) {
        callbacks.tryAbort();
         true ? warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : undefined;
      }

      var err = event.error;

      if (err instanceof RbdInvariant) {
        event.preventDefault();

        if (true) {
          error(err.message);
        }
      }
    };

    _this.getCallbacks = function () {
      if (!_this.callbacks) {
        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
      }

      return _this.callbacks;
    };

    _this.setCallbacks = function (callbacks) {
      _this.callbacks = callbacks;
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: 'error',
      fn: this.onWindowError
    }]);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };

  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }

      this.setState({});
      return;
    }

    throw err;
  };

  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
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
  dragHandleUsageInstructions: dragHandleUsageInstructions,
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

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

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
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
  !droppable.frame ?  true ? invariant(false) : undefined : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, scrollable, {
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

  var result = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }

  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }

  return Object.keys(map).map(function (key) {
    return map[key];
  });
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
function toArray(list) {
  return Array.prototype.slice.call(list);
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

var getDraggablesInsideDroppable = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

function tryGetDestination(impact) {
  if (impact.at && impact.at.type === 'REORDER') {
    return impact.at.destination;
  }

  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at.combine;
  }

  return null;
}

var removeDraggableFromList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var location = tryGetDestination(previousImpact);

  if (!location) {
    return null;
  }

  function getImpact(target) {
    var at = {
      type: 'COMBINE',
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, previousImpact, {
      at: at
    });
  }

  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;

  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }

  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }

    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }

  var indexOfClosest = findIndex(withoutDraggable, function (d) {
    return d.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ?  true ? invariant(false, 'Could not find displaced item in set') : undefined : void 0;
  var proposedIndex = indexOfClosest - 1;

  if (proposedIndex < 0) {
    return null;
  }

  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
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
  return isVisible(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!last) {
    return true;
  }

  var invisible = last.invisible,
      visible = last.visible;

  if (invisible[id]) {
    return false;
  }

  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};

function getTarget(draggable, displacedBy) {
  var marginBox = draggable.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["expand"])(marginBox, expandBy));
}

function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging,
      destination = _ref.destination,
      displacedBy = _ref.displacedBy,
      viewport = _ref.viewport,
      forceShouldAnimate = _ref.forceShouldAnimate,
      last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable) {
    var target = getTarget(draggable, displacedBy);
    var id = draggable.descriptor.id;
    groups.all.push(id);
    var isVisible = isPartiallyVisible({
      target: target,
      destination: destination,
      viewport: viewport,
      withDroppableDisplacement: true
    });

    if (!isVisible) {
      groups.invisible[draggable.descriptor.id] = true;
      return groups;
    }

    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate: shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}

function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }

  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}

function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination,
      inHomeList = _ref.inHomeList,
      displacedBy = _ref.displacedBy,
      destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList: inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}

function calculateReorderImpact(_ref2) {
  var draggable = _ref2.draggable,
      insideDestination = _ref2.insideDestination,
      destination = _ref2.destination,
      viewport = _ref2.viewport,
      displacedBy = _ref2.displacedBy,
      last = _ref2.last,
      index = _ref2.index,
      forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable, destination);

  if (index == null) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var match = find(insideDestination, function (item) {
    return item.descriptor.index === index;
  });

  if (!match) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var sliceFrom = insideDestination.indexOf(match);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination: destination,
    displacedBy: displacedBy,
    last: last,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate
  });
  return {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: index
      }
    }
  };
}

function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      draggables = _ref.draggables,
      combine = _ref.combine,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var combineId = combine.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }

    return combineWithIndex - 1;
  }

  if (isMovingForward) {
    return combineWithIndex + 1;
  }

  return combineWithIndex;
});

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      insideDestination = _ref.insideDestination,
      location = _ref.location;

  if (!insideDestination.length) {
    return null;
  }

  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

  if (proposedIndex < firstIndex) {
    return null;
  }

  if (proposedIndex > upperBound) {
    return null;
  }

  return proposedIndex;
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ?  true ? invariant(false, 'Cannot move in direction without previous impact location') : undefined : void 0;

  if (wasAt.type === 'REORDER') {
    var _newIndex = fromReorder({
      isMovingForward: isMovingForward,
      isInHomeList: isInHomeList,
      location: wasAt.destination,
      insideDestination: insideDestination
    });

    if (_newIndex == null) {
      return null;
    }

    return calculateReorderImpact({
      draggable: draggable,
      insideDestination: insideDestination,
      destination: destination,
      viewport: viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }

  var newIndex = fromCombine({
    isMovingForward: isMovingForward,
    destination: destination,
    displaced: previousImpact.displaced,
    draggables: draggables,
    combine: wasAt.combine,
    afterCritical: afterCritical
  });

  if (newIndex == null) {
    return null;
  }

  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      afterCritical = _ref.afterCritical,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var whenCombining = (function (_ref) {
  var afterCritical = _ref.afterCritical,
      impact = _ref.impact,
      draggables = _ref.draggables;
  var combine = tryGetCombine(impact);
  !combine ?  true ? invariant(false) : undefined : void 0;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical: afterCritical,
    combineWith: combineWith,
    displacedBy: impact.displacedBy
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
  var impact = _ref.impact,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      afterCritical = _ref.afterCritical;
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

  var displaced = impact.displaced,
      displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];

  if (closestAfter) {
    var closest = draggables[closestAfter];

    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closest.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(closest.page, displacedBy.point);
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

  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(last.page, negate(afterCritical.displacedBy.point));
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
      afterCritical = _ref.afterCritical;
  var original = draggable.page.borderBox.center;
  var at = impact.at;

  if (!droppable) {
    return original;
  }

  if (!at) {
    return original;
  }

  if (at.type === 'REORDER') {
    return whenReordering({
      impact: impact,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      afterCritical: afterCritical
    });
  }

  return whenCombining({
    impact: impact,
    draggables: draggables,
    afterCritical: afterCritical
  });
};

var getPageBorderBoxCenterFromImpact = (function (args) {
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

function getDraggables(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];

    if (displacement) {
      return displacement;
    }
  }

  return null;
}

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var withDroppableScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll];
  last.all.forEach(function (id) {
    var displacement = tryGetVisible(id, groups);

    if (displacement) {
      visible[id] = displacement;
      return;
    }

    invisible[id] = true;
  });

  var newImpact = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: {
      all: last.all,
      invisible: invisible,
      visible: visible
    }
  });

  return newImpact;
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
      afterCritical = _ref.afterCritical;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
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
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
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
    maxScrollChange: distance
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? invariant(false, 'Cannot get clipped area from droppable') : undefined : void 0;
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

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
  var original = draggable.page.borderBox.center;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
  var original = draggable.page.borderBox;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, afterCritical),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

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

var getDisplacedBy = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function getDisplacedBy(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;

  if (droppable.descriptor.mode === 'virtual') {
    return patch(axis.line, placeholderSize[axis.line]);
  }

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
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame, {
    scroll: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? invariant(false, 'Should not add placeholder space to home list') : undefined : void 0;
  !!droppable.subject.withPlaceholder ?  true ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : undefined : void 0;
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

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
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
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? invariant(false, 'Cannot remove placeholder form subject when there was none') : undefined : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : undefined : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: 'REORDER',
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      afterCritical: afterCritical
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

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

  var proposedIndex = function () {
    var relativeTo = moveRelativeTo.descriptor.index;

    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return relativeTo;
    }

    if (isGoingBeforeTarget) {
      return relativeTo;
    }

    return relativeTo + 1;
  }();

  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    displacedBy: displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
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
    afterCritical: afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
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

var whatIsDraggedOver = (function (impact) {
  var at = impact.at;

  if (!at) {
    return null;
  }

  if (at.type === 'REORDER') {
    return at.destination.droppableId;
  }

  return at.combine.droppableId;
});

var getDroppableOver = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
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
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}

function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}

function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox,
      draggable = _ref.draggable,
      candidates = _ref.candidates;
  var startCenter = draggable.page.borderBox.center;
  var sorted = candidates.map(function (candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function (a, b) {
    return b.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}

function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox,
      draggable = _ref2.draggable,
      droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function (item) {
    if (!item.isEnabled) {
      return false;
    }

    var active = item.subject.active;

    if (!active) {
      return false;
    }

    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }

    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }

    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);

    if (!isStartContained && !isEndContained) {
      return true;
    }

    if (isStartContained) {
      return crossAxisStart < childCenter;
    }

    return crossAxisEnd > childCenter;
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }

  return getFurthestAway({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    candidates: candidates
  });
}

var offsetRectByPosition = function offsetRectByPosition(rect, point) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(offsetByPosition(rect, point));
};

var withDroppableScroll = (function (droppable, area) {
  var frame = droppable.frame;

  if (!frame) {
    return area;
  }

  return offsetRectByPosition(area, frame.scroll.diff.value);
});

function getIsDisplaced(_ref) {
  var displaced = _ref.displaced,
      id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}

function atIndex(_ref) {
  var draggable = _ref.draggable,
      closest = _ref.closest,
      inHomeList = _ref.inHomeList;

  if (!closest) {
    return null;
  }

  if (!inHomeList) {
    return closest.descriptor.index;
  }

  if (closest.descriptor.index > draggable.descriptor.index) {
    return closest.descriptor.index - 1;
  }

  return closest.descriptor.index;
}

var getReorderImpact = (function (_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
      draggable = _ref2.draggable,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      last = _ref2.last,
      viewport = _ref2.viewport,
      afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var closest = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }

      return targetStart < childCenter - displacement;
    }

    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }

    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable,
    closest: closest,
    inHomeList: isHomeOf(draggable, destination)
  });
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: last,
    displacedBy: displacedBy,
    index: newIndex
  });
});

var combineThresholdDivisor = 4;
var getCombineImpact = (function (_ref) {
  var draggable = _ref.draggable,
      targetRect = _ref.pageBorderBoxWithDroppableScroll,
      previousImpact = _ref.previousImpact,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var combineWith = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }

      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }

    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }

    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });

  if (!combineWith) {
    return null;
  }

  var impact = {
    displacedBy: displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: 'COMBINE',
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageOffset = _ref.pageOffset,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    previousImpact: previousImpact,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    last: previousImpact.displaced,
    viewport: viewport,
    afterCritical: afterCritical
  });
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
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

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    current: current,
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

function getDraggables$1(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      destination = _ref.destination,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate,
    last: last
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: displaced
  });
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    afterCritical: afterCritical
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
  !(state.movementMode === 'SNAP') ?  true ? invariant(false) : undefined : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? invariant(false, 'Must be over a destination in SNAP movement mode') : undefined : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getLiftEffect = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable);
  !(rawIndex !== -1) ?  true ? invariant(false, 'Expected draggable to be inside home list') : undefined : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home.descriptor.mode === 'virtual',
    displacedBy: displacedBy,
    effected: effected
  };
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: home,
    displacedBy: displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: getHomeLocation(draggable.descriptor)
    }
  };
  return {
    impact: impact,
    afterCritical: afterCritical
  };
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var start = function start(key) {
  if (true) {
    {
      return;
    }
  }
};
var finish = function finish(key) {
  if (true) {
    {
      return;
    }
  }
};

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["offset"])(draggable.client, offset$1);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, initialWindowScroll);

  var moved = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable, {
    placeholder: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? invariant(false, 'Expected Droppable to have a frame') : undefined : void 0;
  return frame;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
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

var publishWhileDraggingInVirtual = (function (_ref) {
  var state = _ref.state,
      published = _ref.published;
  start();
  var withScrollChange = published.modified.map(function (update) {
    var existing = state.dimensions.droppables[update.droppableId];
    var scrolled = scrollDroppable(existing, update.scroll);
    return scrolled;
  });

  var droppables = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));

  var draggables = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.draggables, {}, updatedAdditions);

  published.removals.forEach(function (id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables: droppables,
    draggables: draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable = dimensions.draggables[state.critical.draggable.id];
  var home = dimensions.droppables[state.critical.droppable.id];

  var _getLiftEffect = getLiftEffect({
    draggable: draggable,
    home: home,
    draggables: draggables,
    viewport: state.viewport
  }),
      onLiftImpact = _getLiftEffect.impact,
      afterCritical = _getLiftEffect.afterCritical;

  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: previousImpact,
    viewport: state.viewport,
    afterCritical: afterCritical
  });
  finish();

  var draggingState = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DRAGGING'
  }, state, {
    phase: 'DRAGGING',
    impact: impact,
    onLiftImpact: onLiftImpact,
    dimensions: dimensions,
    afterCritical: afterCritical,
    forceShouldAnimate: false
  });

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, {
    phase: 'DROP_PENDING',
    reason: state.reason,
    isWaiting: false
  });

  return dropPending;
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

function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === 'SNAP') {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      scrollJumpRequest: null
    });
  }

  return state;
}

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'FLUSH') {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idle, {
      shouldFlush: true
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : undefined : void 0;
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
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getLiftEffect = getLiftEffect({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getLiftEffect.impact,
        afterCritical = _getLiftEffect.afterCritical;

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
      afterCritical: afterCritical,
      onLiftImpact: impact,
      viewport: viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, "Collection cannot start from phase " + state.phase) : undefined : void 0;

    var _result = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : undefined : void 0;
    return publishWhileDraggingInVirtual({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
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
      return removeScrollJumpRequest(state);
    }

    if (state.phase === 'COLLECTING') {
      return removeScrollJumpRequest(state);
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : undefined : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : undefined : void 0;

    var updated = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : undefined : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : undefined : void 0;

    var _updated = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Cannot move by window in phase " + state.phase) : undefined : void 0;
    !state.isWindowScrollAllowed ?  true ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : undefined : void 0;
    var _newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }

    var _viewport = scrollViewport(state.viewport, _newScroll);

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

    var withMaxScroll = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport, {
      scroll: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, action.type + " received while not in DRAGGING phase") : undefined : void 0;

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
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : undefined : void 0;

    var newState = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot animate drop from phase " + state.phase) : undefined : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _completed = action.payload.completed;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: false
    };
  }

  return state;
});

var beforeInitialCapture = function beforeInitialCapture(args) {
  return {
    type: 'BEFORE_INITIAL_CAPTURE',
    payload: args
  };
};
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
var publishWhileDragging = function publishWhileDragging(args) {
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
var flush = function flush() {
  return {
    type: 'FLUSH',
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

function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }

  var indexes = insideDestination.map(function (d) {
    return d.descriptor.index;
  });
  var errors = {};

  for (var i = 1; i < indexes.length; i++) {
    var current = indexes[i];
    var previous = indexes[i - 1];

    if (current !== previous + 1) {
      errors[current] = true;
    }
  }

  if (!Object.keys(errors).length) {
    return;
  }

  var formatted = indexes.map(function (index) {
    var hasError = Boolean(errors[index]);
    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
  }).join(', ');
   true ? warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : undefined;
}

function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? invariant(false, 'Unexpected phase to start a drag') : undefined : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id,
          movementMode: movementMode
        }));
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

        validateDimensions(critical, dimensions);
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

        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
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
      afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    afterCritical: afterCritical,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  return offset;
});

var getDropImpact = (function (_ref) {
  var draggables = _ref.draggables,
      reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      onLiftImpact = _ref.onLiftImpact;

  if (!lastImpact.at || reason !== 'DROP') {
    var recomputedHomeImpact = recompute({
      draggables: draggables,
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }

  if (lastImpact.at.type === 'REORDER') {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }

  var withoutMovement = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, lastImpact, {
    displaced: emptyGroups
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
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
      !!isWaitingForDrop ?  true ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : undefined : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot drop in phase: " + state.phase) : undefined : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable = dimensions.draggables[state.critical.draggable.id];

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
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
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed
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

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

function getWindowScrollBinding(update) {
  return {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }

      update();
    }
  };
}

function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;

  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }

  var scheduled = Object(raf_schd__WEBPACK_IMPORTED_MODULE_8__["default"])(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;

  function isActive() {
    return unbind !== noop;
  }

  function start() {
    !!isActive() ?  true ? invariant(false, 'Cannot start scroll listener when already active') : undefined : void 0;
    unbind = bindEvents(window, [binding]);
  }

  function stop() {
    !isActive() ?  true ? invariant(false, 'Cannot stop scroll listener when not active') : undefined : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }

  return {
    start: start,
    stop: stop,
    isActive: isActive
  };
}

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var scrollListener = (function (store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll: newScroll
      }));
    }
  });
  return function (next) {
    return function (action) {
      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
        listener.start();
      }

      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }

      next(action);
    };
  };
});

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
    !(index !== -1) ?  true ? invariant(false, 'Could not find timer') : undefined : void 0;

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
  start();
  fn();
  finish();
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

  var beforeCapture = function beforeCapture(draggableId, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : undefined : void 0;
    withTimings('onBeforeCapture', function () {
      var fn = getResponders().onBeforeCapture;

      if (fn) {
        var before = {
          draggableId: draggableId,
          mode: mode
        };
        fn(before);
      }
    });
  };

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : undefined : void 0;
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
    var location = tryGetDestination(impact);
    var combine = tryGetCombine(impact);
    !dragging ?  true ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : undefined : void 0;
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

    var data = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(critical, dragging.mode), {
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
    !dragging ?  true ? invariant(false, 'Can only flush responders while dragging') : undefined : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : undefined : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeCapture: beforeCapture,
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
        if (action.type === 'BEFORE_INITIAL_CAPTURE') {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }

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

        if (action.type === 'FLUSH') {
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
      !(state.phase === 'DROP_ANIMATING') ?  true ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : undefined : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
});

var dropAnimationFlushOnScroll = (function (store) {
  var unbind = null;
  var frameId = null;

  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (unbind) {
      unbind();
      unbind = null;
    }
  }

  return function (next) {
    return function (action) {
      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
        clear();
      }

      next(action);

      if (action.type !== 'DROP_ANIMATE') {
        return;
      }

      var binding = {
        eventName: 'scroll',
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();

          if (state.phase === 'DROP_ANIMATING') {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function () {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var focus = (function (marshal) {
  var isWatching = false;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }

        next(action);

        if (!isWatching) {
          return;
        }

        if (action.type === 'FLUSH') {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          isWatching = false;
          var result = action.payload.completed.result;

          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }

          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
});

var shouldStop = function shouldStop(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : undefined : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
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
  var dimensionMarshal = _ref.dimensionMarshal,
      focusMarshal = _ref.focusMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(reducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
});

var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry,
      callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;

  var collect = function collect() {
    if (frameId) {
      return;
    }

    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function () {
      frameId = null;
      start();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;
      var added = Object.keys(additions).map(function (id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });
      var updated = Object.keys(modified).map(function (id) {
        var entry = registry.droppable.getById(id);
        var scroll = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      finish();
      callbacks.publish(result);
    });
  };

  var add = function add(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;

    if (staging.removals[id]) {
      delete staging.removals[id];
    }

    collect();
  };

  var remove = function remove(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
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
    staging = clean$1();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
}

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

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? invariant(false, 'Cannot find document.documentElement') : undefined : void 0;
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
      registry = _ref.registry;
  start();
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish();
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }

  if (entry.descriptor.type !== dragging.type) {
    return false;
  }

  var home = registry.droppable.getById(entry.descriptor.droppableId);

  if (home.descriptor.mode !== 'virtual') {
     true ? warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : undefined;
    return false;
  }

  return true;
}

var createDimensionMarshal = (function (registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry: registry
  });

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : undefined : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;
    callbacks.updateDroppableScroll({
      id: id,
      newScroll: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    if (!collection) {
      return;
    }

    registry.droppable.getById(id).callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    registry.droppable.getAllByType(home.type).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };

  var subscriber = function subscriber(event) {
    !collection ?  true ? invariant(false, 'Should only be subscribed when a collection is occurring') : undefined : void 0;
    var dragging = collection.critical.draggable;

    if (event.type === 'ADDITION') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }

    if (event.type === 'REMOVAL') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : undefined : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical: critical,
      unsubscribe: unsubscribe
    };
    return getInitialPublish({
      critical: critical,
      registry: registry,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
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
    !droppable.frame ?  true ? invariant(false, 'Invalid result') : undefined : void 0;
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
  var now = Date.now();
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

var clean$2 = apply(function (value) {
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
  var required = clean$2({
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
  var scheduleWindowScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollWindow);
  var scheduleDroppableScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? invariant(false, 'Cannot fluid scroll if not dragging') : undefined : void 0;
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

  var start$1 = function start$1(state) {
    start();
    !!dragging ?  true ? invariant(false, 'Cannot start auto scrolling when already started') : undefined : void 0;
    var dragStartTime = Date.now();
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
    finish();

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
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
    !destination ?  true ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : undefined : void 0;
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
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = 'data-rbd';
var dragHandle = function () {
  var base = prefix$1 + "-drag-handle";
  return {
    base: base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function () {
  var base = prefix$1 + "-draggable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function () {
  var base = prefix$1 + "-droppable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};

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
var getStyles$1 = (function (contextId) {
  var getSelector = makeGetSelector(contextId);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle.contextId),
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
      selector: getSelector(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable.contextId),
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

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? invariant(false, 'Cannot find the head to append a style to') : undefined : void 0;
  return head;
};

var createStyleEl = function createStyleEl(nonce) {
  var el = document.createElement('style');

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  el.type = 'text/css';
  return el;
};

function useStyleMarshal(contextId, nonce) {
  var styles = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var dynamicRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setDynamicStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : undefined : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? invariant(false, 'style elements already mounted') : undefined : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? invariant(false, 'Cannot unmount ref as it is not set') : undefined : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));

  if (!possible.length) {
     true ? warning("Unable to find any drag handles in the context \"" + contextId + "\"") : undefined;
    return null;
  }

  var handle = find(possible, function (el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });

  if (!handle) {
     true ? warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") : undefined;
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle needs to be a HTMLElement') : undefined;
    return null;
  }

  return handle;
}

function useFocusMarshal(contextId) {
  var entriesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  var recordRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var restoreFocusFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var register = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function register(id, focus) {
    var entry = {
      id: id,
      focus: focus
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];

      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryGiveFocus(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);

    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryShiftRecord(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryRestoreFocusRecorded() {
    if (restoreFocusFrameRef.current) {
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    restoreFocusFrameRef.current = requestAnimationFrame(function () {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;

      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryRecordFocus(id) {
    recordRef.current = null;
    var focused = document.activeElement;

    if (!focused) {
      return;
    }

    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }

    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function () {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      register: register,
      tryRecordFocus: tryRecordFocus,
      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
      tryShiftRecord: tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}

function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];

  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb);

      if (index === -1) {
        return;
      }

      subscribers.splice(index, 1);
    };
  }

  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }

  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ?  true ? invariant(false, "Cannot find draggable entry with id [" + id + "]") : undefined : void 0;
    return entry;
  }

  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: 'ADDITION',
        value: entry
      });
    },
    update: function update(entry, last) {
      var current = entries.draggables[last.descriptor.id];

      if (!current) {
        return;
      }

      if (current.uniqueId !== entry.uniqueId) {
        return;
      }

      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.draggables[draggableId];
      notify({
        type: 'REMOVAL',
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }

  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ?  true ? invariant(false, "Cannot find droppable entry with id [" + id + "]") : undefined : void 0;
    return entry;
  }

  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function clean() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }

  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe: subscribe,
    clean: clean
  };
}

function useRegistry() {
  var registry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(createRegistry, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? invariant(false, 'Cannot find document.body') : undefined : void 0;
  return body;
});

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

var getId = function getId(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return getId(contextId);
  }, [contextId]);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function setup() {
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('aria-atomic', 'true');

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();

        if (body.contains(el)) {
          body.removeChild(el);
        }

        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id]);
  var announce = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : undefined;
  }, []);
  return announce;
}

var count = 0;
var defaults = {
  separator: '::'
};
function reset() {
  count = 0;
}
function useUniqueId(prefix, options) {
  if (options === void 0) {
    options = defaults;
  }

  return Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return "" + prefix + options.separator + count++;
  }, [options.separator, prefix]);
}

function getElementId(_ref) {
  var contextId = _ref.contextId,
      uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId,
      text = _ref2.text;
  var uniqueId = useUniqueId('hidden-text', {
    separator: '-'
  });
  var id = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return getElementId({
      contextId: contextId,
      uniqueId: uniqueId
    });
  }, [uniqueId, contextId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function mount() {
    var el = document.createElement('div');
    el.id = id;
    el.textContent = text;
    el.style.display = 'none';
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();

      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var peerDependencies = {
	react: "^16.8.5",
	"react-dom": "^16.8.5"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? invariant(false, "Unable to parse React version " + value) : undefined : void 0;
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

function useDev(useHook) {
  if (true) {
    useHook();
  }
}

function useDevSetupWarning(fn, inputs) {
  useDev(function () {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      try {
        fn();
      } catch (e) {
        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
      }
    }, inputs);
  });
}

function useStartupValidation() {
  useDevSetupWarning(function () {
    checkReactVersion(peerDependencies.react, react__WEBPACK_IMPORTED_MODULE_0___default.a.version);
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(current);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = current;
  });
  return ref;
}

function create() {
  var lock = null;

  function isClaimed() {
    return Boolean(lock);
  }

  function isActive(value) {
    return value === lock;
  }

  function claim(abandon) {
    !!lock ?  true ? invariant(false, 'Cannot claim lock as it is already claimed') : undefined : void 0;
    var newLock = {
      abandon: abandon
    };
    lock = newLock;
    return newLock;
  }

  function release() {
    !lock ?  true ? invariant(false, 'Cannot release lock when there is no lock') : undefined : void 0;
    lock = null;
  }

  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }

  return {
    isClaimed: isClaimed,
    isActive: isActive,
    claim: claim,
    release: release,
    tryAbandon: tryAbandon
  };
}

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
var sloppyClickThreshold = 5;

function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}

var idle$1 = {
  type: 'IDLE'
};

function getCaptureBindings(_ref) {
  var cancel = _ref.cancel,
      completed = _ref.completed,
      getPhase = _ref.getPhase,
      setPhase = _ref.setPhase;
  return [{
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
      var phase = getPhase();

      if (phase.type === 'DRAGGING') {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }

      !(phase.type === 'PENDING') ?  true ? invariant(false, 'Cannot be IDLE') : undefined : void 0;
      var pending = phase.point;

      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }

      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: 'DRAGGING',
        actions: actions
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (getPhase().type === 'DRAGGING') {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type === 'PENDING') {
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
    fn: function fn() {
      if (getPhase().type === 'PENDING') {
        cancel();
      }
    }
  }, {
    eventName: 'webkitmouseforcedown',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false, 'Unexpected phase') : undefined : void 0;

      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor(api) {
  var phaseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(idle$1);
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      eventName: 'mousedown',
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.button !== primaryButton) {
          return;
        }

        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      eventName: 'webkitmouseforcewillbegin',
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }

        var id = api.findClosestDraggableId(event);

        if (!id) {
          return;
        }

        var options = api.findOptionsForDraggable(id);

        if (!options) {
          return;
        }

        if (options.shouldRespectForcePress) {
          return;
        }

        if (!api.canGetLock(id)) {
          return;
        }

        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function listenForCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel: cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function startPendingDrag(actions, point) {
    !(phaseRef.current.type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : undefined : void 0;
    phaseRef.current = {
      type: 'PENDING',
      point: point,
      actions: actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var _scrollJumpKeys;

function noop$1() {}

var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }

  function drop() {
    stop();
    actions.drop();
  }

  return [{
    eventName: 'keydown',
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      if (event.keyCode === space) {
        event.preventDefault();
        drop();
        return;
      }

      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }

      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }

      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }

      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }

      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
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
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useKeyboardSensor(api) {
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop$1);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      eventName: 'keydown',
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.keyCode !== space) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!preDrag) {
          return;
        }

        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();

        function stop() {
          !isCapturing ?  true ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : undefined : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }

        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var idle$2 = {
  type: 'IDLE'
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;

function getWindowBindings(_ref) {
  var cancel = _ref.cancel,
      getPhase = _ref.getPhase;
  return [{
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel,
      completed = _ref2.completed,
      getPhase = _ref2.getPhase;
  return [{
    eventName: 'touchmove',
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      phase.hasMoved = true;
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false) : undefined : void 0;
      var touch = event.touches[0];

      if (!touch) {
        return;
      }

      var isForcePress = touch.force >= forcePressThreshold;

      if (!isForcePress) {
        return;
      }

      var shouldRespect = phase.actions.shouldRespectForcePress();

      if (phase.type === 'PENDING') {
        if (shouldRespect) {
          cancel();
        }

        return;
      }

      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }

        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor$1(api) {
  var phaseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(idle$2);
  var unbindEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(noop);
  var getPhase = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function getPhase() {
    return phaseRef.current;
  }, []);
  var setPhase = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function setPhase(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      eventName: 'touchstart',
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        var touch = event.touches[0];
        var clientX = touch.clientX,
            clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function listenForCapture() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    if (current.type === 'PENDING') {
      clearTimeout(current.longPressTimerId);
    }

    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel: cancel,
      completed: stop,
      getPhase: getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function startDragging() {
    var phase = getPhase();
    !(phase.type === 'PENDING') ?  true ? invariant(false, "Cannot start dragging from phase " + phase.type) : undefined : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: 'DRAGGING',
      actions: actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function startPendingDrag(actions, point) {
    !(getPhase().type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : undefined : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: 'PENDING',
      point: point,
      actions: actions,
      longPressTimerId: longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: 'touchmove',
      fn: function fn() {},
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}

function useValidateSensorHooks(sensorHooks) {
  useDev(function () {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function () {
      !(previousRef.current.length === sensorHooks.length) ?  true ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : undefined : void 0;
    });
  });
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

function isAnInteractiveElement(parent, current) {
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
}

function isEventInInteractiveElement(draggable, event) {
  var target = event.target;

  if (!isHtmlElement(target)) {
    return false;
  }

  return isAnInteractiveElement(draggable, target);
}

var getBorderBoxCenterPosition = (function (el) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["getRect"])(el.getBoundingClientRect()).center;
});

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var supportedMatchesName = function () {
  var base = 'matches';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
  var value = find(candidates, function (name) {
    return name in Element.prototype;
  });
  return value || base;
}();

function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }

  if (el[supportedMatchesName](selector)) {
    return el;
  }

  return closestPonyfill(el.parentElement, selector);
}

function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }

  return closestPonyfill(el, selector);
}

function getSelector(contextId) {
  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
}

function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;

  if (!isElement(target)) {
     true ? warning('event.target must be a Element') : undefined;
    return null;
  }

  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);

  if (!handle) {
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle must be a HTMLElement') : undefined;
    return null;
  }

  return handle;
}

function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);

  if (!handle) {
    return null;
  }

  return handle.getAttribute(dragHandle.draggableId);
}

function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function (el) {
    return el.getAttribute(draggable.id) === draggableId;
  });

  if (!draggable$1) {
    return null;
  }

  if (!isHtmlElement(draggable$1)) {
     true ? warning('Draggable element is not a HTMLElement') : undefined;
    return null;
  }

  return draggable$1;
}

function preventDefault(event) {
  event.preventDefault();
}

function _isActive(_ref) {
  var expected = _ref.expected,
      phase = _ref.phase,
      isLockActive = _ref.isLockActive,
      shouldWarn = _ref.shouldWarn;

  if (!isLockActive()) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : undefined;
    }

    return false;
  }

  if (expected !== phase) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : undefined;
    }

    return false;
  }

  return true;
}

function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI,
      store = _ref2.store,
      registry = _ref2.registry,
      draggableId = _ref2.draggableId;

  if (lockAPI.isClaimed()) {
    return false;
  }

  var entry = registry.draggable.findById(draggableId);

  if (!entry) {
     true ? warning("Unable to find draggable with id: " + draggableId) : undefined;
    return false;
  }

  if (!entry.options.isEnabled) {
    return false;
  }

  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }

  return true;
}

function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI,
      contextId = _ref3.contextId,
      store = _ref3.store,
      registry = _ref3.registry,
      draggableId = _ref3.draggableId,
      forceSensorStop = _ref3.forceSensorStop,
      sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI: lockAPI,
    store: store,
    registry: registry,
    draggableId: draggableId
  });

  if (!shouldStart) {
    return null;
  }

  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);

  if (!el) {
     true ? warning("Unable to find draggable element with id: " + draggableId) : undefined;
    return null;
  }

  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }

  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = 'PRE_DRAG';

  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }

  function isLockActive() {
    return lockAPI.isActive(lock);
  }

  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected: expected,
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }

  var tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

  function lift$1(args) {
    function completed() {
      lockAPI.release();
      phase = 'COMPLETED';
    }

    if (phase !== 'PRE_DRAG') {
      completed();
      !(phase === 'PRE_DRAG') ?  true ? invariant(false, "Cannot lift in phase " + phase) : undefined : void 0;
    }

    store.dispatch(lift(args.liftActionArgs));
    phase = 'DRAGGING';

    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }

      args.cleanup();

      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: 'click',
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }

      completed();
      store.dispatch(drop({
        reason: reason
      }));
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      isActive: function isActive() {
        return _isActive({
          expected: 'DRAGGING',
          phase: phase,
          isLockActive: isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop(options) {
        return finish('DROP', options);
      },
      cancel: function cancel(options) {
        return finish('CANCEL', options);
      }
    }, args.actions);
  }

  function fluidLift(clientSelection) {
    var move$1 = Object(raf_schd__WEBPACK_IMPORTED_MODULE_8__["default"])(function (client) {
      tryDispatchWhenDragging(function () {
        return move({
          client: client
        });
      });
    });
    var api = lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: 'FLUID'
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, api, {
      move: move$1
    });
  }

  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: 'SNAP'
      },
      cleanup: noop,
      actions: actions
    });
  }

  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: 'PRE_DRAG',
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    });

    if (shouldRelease) {
      lockAPI.release();
    }
  }

  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: 'PRE_DRAG',
        phase: phase,
        isLockActive: isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift: fluidLift,
    snapLift: snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}

var defaultSensors = [useMouseSensor, useKeyboardSensor, useMouseSensor$1];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId,
      store = _ref4.store,
      registry = _ref4.registry,
      customSensors = _ref4.customSensors,
      enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return create();
  })[0];
  var tryAbandonLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryAbandonLock(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function () {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function () {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (draggableId) {
    return canStart({
      lockAPI: lockAPI,
      registry: registry,
      store: store,
      draggableId: draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (draggableId, forceStop, options) {
    return tryStart({
      lockAPI: lockAPI,
      registry: registry,
      contextId: contextId,
      store: store,
      draggableId: draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function tryReleaseLock() {
    if (!lockAPI.isClaimed()) {
      return;
    }

    lockAPI.tryAbandon();

    if (store.getState().phase !== 'IDLE') {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(lockAPI.isClaimed, [lockAPI]);
  var api = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      canGetLock: canGetLock,
      tryGetLock: tryGetLock,
      findClosestDraggableId: findClosestDraggableId,
      findOptionsForDraggable: findOptionsForDraggable,
      tryReleaseLock: tryReleaseLock,
      isLockClaimed: isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);

  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}

var createResponders = function createResponders(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? invariant(false, 'Could not find store from lazy ref') : undefined : void 0;
  return lazyRef.current;
}

function App(props) {
  var contextId = props.contextId,
      setCallbacks = props.setCallbacks,
      sensors = props.sensors,
      nonce = props.nonce,
      dragHandleUsageInstructions = props.dragHandleUsageInstructions;
  var lazyStoreRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId: contextId,
    text: dragHandleUsageInstructions
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
      publishWhileDragging: publishWhileDragging,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return createAutoScroller(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return createStore({
      announce: announce,
      autoScroller: autoScroller,
      dimensionMarshal: dimensionMarshal,
      focusMarshal: focusMarshal,
      getResponders: getResponders,
      styleMarshal: styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : undefined;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === 'DROP_ANIMATING';
  }, []);
  var appCallbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      isDragging: isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId: contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
      registry: registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId: contextId,
    store: store,
    registry: registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    context: StoreContext,
    store: store
  }, props.children));
}

var count$1 = 0;
function reset$1() {
  count$1 = 0;
}
function useInstanceCount() {
  return Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return "" + count$1++;
  }, []);
}

function resetServerContext() {
  reset$1();
  reset();
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorBoundary, null, function (setCallbacks) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
      nonce: props.nonce,
      contextId: contextId,
      setCallbacks: setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}

var isEqual$1 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$1('scroll');
var isAuto = isEqual$1('auto');
var isVisible$1 = isEqual$1('visible');

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
  !html ?  true ? invariant(false) : undefined : void 0;

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

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context);
  !result ?  true ? invariant(false, 'Could not find required context') : undefined : void 0;
  return result;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppablePublisher(args) {
  var whileDraggingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId('droppable');
  var registry = appContext.registry,
      marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(descriptor);
  var memoizedUpdateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? invariant(false, 'Can only update scroll when dragging') : undefined : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return Object(raf_schd__WEBPACK_IMPORTED_MODULE_8__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Could not find scroll options while scrolling') : undefined : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : undefined : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? invariant(false, 'Cannot collect without a droppable ref') : undefined : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;

    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }

    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : undefined : void 0;
    return getScroll$1(closest);
  }, []);
  var dragStopped = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot stop drag when no active drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeAttribute(scrollContainer.contextId);
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot scroll when there is no drag') : undefined : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : undefined : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      getScrollWhileDragging: getScrollWhileDragging,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
  var entry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      callbacks: callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : undefined;
        dragStopped();
      }

      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop$2() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
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
    transition: animate !== 'none' ? transitions.placeholder : null
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tryClearAnimateOpenTimer = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      contextId = props.contextId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }

    if (animateOpenTimerRef.current) {
      return noop$2;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.placeholder.tagName, {
    style: style,
    'data-rbd-placeholder-context-id': contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : undefined : void 0;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function runChecks(args, checks) {
  checks.forEach(function (check) {
    return check(args);
  });
}

var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ?  true ? invariant(false, 'A Droppable requires a droppableId prop') : undefined : void 0;
  !(typeof props.droppableId === 'string') ?  true ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : undefined : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ?  true ? invariant(false, 'isDropDisabled must be a boolean') : undefined : void 0;
  !isBoolean(props.isCombineEnabled) ?  true ? invariant(false, 'isCombineEnabled must be a boolean') : undefined : void 0;
  !isBoolean(props.ignoreContainerClipping) ?  true ? invariant(false, 'ignoreContainerClipping must be a boolean') : undefined : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props,
      getPlaceholderRef = _ref4.getPlaceholderRef;

  if (!props.placeholder) {
    return;
  }

  var ref = getPlaceholderRef();

  if (ref) {
    return;
  }

   true ? warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : undefined;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ?  true ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : undefined : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ?  true ? invariant(false, 'Expected virtual list to not have a placeholder') : undefined : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function () {
    runChecks(args, shared);

    if (args.props.mode === 'standard') {
      runChecks(args, standard);
    }

    if (args.props.mode === 'virtual') {
      runChecks(args, virtual);
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimateInOut, _React$PureComponent);

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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

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

function getDraggingStyle(dragging) {
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
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["calculateBox"])(borderBox, computedStyles);
  var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_6__["withScroll"])(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
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
}

function useDraggablePublisher(args) {
  var uniqueId = useUniqueId('draggable');
  var descriptor = args.descriptor,
      registry = args.registry,
      getDraggableRef = args.getDraggableRef,
      canDragInteractiveElements = args.canDragInteractiveElements,
      shouldRespectForcePress = args.shouldRespectForcePress,
      isEnabled = args.isEnabled;
  var options = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      canDragInteractiveElements: canDragInteractiveElements,
      shouldRespectForcePress: shouldRespectForcePress,
      isEnabled: isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (windowScroll) {
    var el = getDraggableRef();
    !el ?  true ? invariant(false, 'Cannot get dimension when no ref is set') : undefined : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      options: options,
      getDimension: getDimension
    };
  }, [descriptor, getDimension, options, uniqueId]);
  var publishedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(entry);
  var isFirstPublishRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  useIsomorphicLayoutEffect(function () {
    registry.draggable.register(publishedRef.current);
    return function () {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function () {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }

    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}

function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function () {
    function prefix(id) {
      return "Draggable[id: " + id + "]: ";
    }

    var id = props.draggableId;
    !id ?  true ? invariant(false, 'Draggable requires a draggableId') : undefined : void 0;
    !(typeof id === 'string') ?  true ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : undefined : void 0;
    !isInteger(props.index) ?  true ? invariant(false, prefix(id) + " requires an integer index prop") : undefined : void 0;

    if (props.mapped.type === 'DRAGGING') {
      return;
    }

    checkIsValidInnerRef(getRef());

    if (props.isEnabled) {
      !findDragHandle(contextId, id) ?  true ? invariant(false, prefix(id) + " Unable to find drag handle") : undefined : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function () {
    var initialRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isClone);
    useDevSetupWarning(function () {
      !(isClone === initialRef.current) ?  true ? invariant(false, 'Draggable isClone prop value changed during component life') : undefined : void 0;
    }, [isClone]);
  });
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function Draggable(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (el) {
    ref.current = el;
  }, []);
  var getRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return ref.current;
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      contextId = _useRequiredContext.contextId,
      dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId,
      registry = _useRequiredContext.registry;

  var _useRequiredContext2 = useRequiredContext(DroppableContext),
      type = _useRequiredContext2.type,
      droppableId = _useRequiredContext2.droppableId;

  var descriptor = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      id: props.draggableId,
      index: props.index,
      type: type,
      droppableId: droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children,
      draggableId = props.draggableId,
      isEnabled = props.isEnabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.canDragInteractiveElements,
      isClone = props.isClone,
      mapped = props.mapped,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);

  if (!isClone) {
    var forPublisher = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return {
        descriptor: descriptor,
        registry: registry,
        getDraggableRef: getRef,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress,
        isEnabled: isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }

  var dragHandleProps = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return isEnabled ? {
      tabIndex: 0,
      role: 'button',
      'aria-describedby': dragHandleUsageInstructionsId,
      'data-rbd-drag-handle-draggable-id': draggableId,
      'data-rbd-drag-handle-context-id': contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-rbd-draggable-context-id': contextId,
        'data-rbd-draggable-id': draggableId,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};

function getDraggableSelector() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone: isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  return selector;
}

function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: combineTargetFor,
    combineWith: null
  };
}

var atRest = {
  mapped: {
    type: 'SECONDARY',
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};

function getSecondarySelector() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(getSecondarySnapshot);
  var getMemoizedProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });

  var getFallback = function getFallback(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };

  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine = tryGetCombine(impact);
    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }

      if (impact.displaced.invisible[ownId]) {
        return null;
      }

      var change = negate(afterCritical.displacedBy.point);

      var _offset = memoizedOffset(change.x, change.y);

      return getMemoizedProps(_offset, combineTargetFor, true);
    }

    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }

    var displaceBy = impact.displacedBy.point;
    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
  };

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }

    return null;
  };

  return selector;
}

var makeMapStateToProps = function makeMapStateToProps() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };

  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);

function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;

  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateDraggable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    isClone: false,
    isEnabled: isEnabled,
    canDragInteractiveElements: canDragInteractiveElements,
    shouldRespectForcePress: shouldRespectForcePress
  }));
}

function Droppable(props) {
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext);
  !appContext ?  true ? invariant(false, 'Could not find app context') : undefined : void 0;
  var contextId = appContext.contextId,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      mode = props.mode,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      useClone = props.useClone,
      updateViewportMaxScroll = props.updateViewportMaxScroll,
      getContainerForClone = props.getContainerForClone;
  var getDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return droppableRef.current;
  }, []);
  var setDroppableRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props: props,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppablePublisher({
    droppableId: droppableId,
    type: type,
    mode: mode,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      contextId: contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-rbd-droppable-id': droppableId,
        'data-rbd-droppable-context-id': contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = Object(use_memo_one__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      droppableId: droppableId,
      type: type,
      isUsingCloneFor: isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);

  function getClone() {
    if (!useClone) {
      return null;
    }

    var dragging = useClone.dragging,
        render = useClone.render;
    var node = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.createPortal(node, getContainerForClone());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };

  var idleWithoutAnimation = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });

  var getDraggableRubric = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone: useClone
      };
    }

    if (!isEnabled) {
      return idleWithoutAnimation;
    }

    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }

    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot,
      useClone: null
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }

    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
      var isHome = _completed.critical.droppable.id === id;

      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }

      if (isHome) {
        return idleWithAnimation;
      }

      return idleWithoutAnimation;
    }

    return idleWithoutAnimation;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll: updateViewportMaxScroll
};

function getBody() {
  !document.body ?  true ? invariant(false, 'document.body is not ready') : undefined : void 0;
  return document.body;
}

var defaultProps = {
  mode: 'standard',
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.0
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

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

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
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

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
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
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

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

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
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
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
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

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
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
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
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
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

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


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
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
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

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

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

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


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
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

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
var KEYCODE_ESCAPE = 27;

var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;

var isWindows = 'navigator' in global && /Win/i.test(navigator.platform);
var isMacLike = 'navigator' in global && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

var className = 'npm__react-simple-code-editor__textarea';

var cssText = /* CSS */'\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.' + className + ':empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn\'t support \'-webkit-text-fill-color\'\n    * So we use \'color: transparent\' to make the text transparent on IE\n    * Unlike other browsers, it doesn\'t affect caret color in IE\n    */\n  .' + className + ' {\n    color: transparent !important;\n  }\n\n  .' + className + '::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n';

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
      capture: true
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
          ignoreTabKey = _this$props.ignoreTabKey,
          onKeyDown = _this$props.onKeyDown;


      if (onKeyDown) {
        onKeyDown(e);

        if (e.defaultPrevented) {
          return;
        }
      }

      if (e.keyCode === KEYCODE_ESCAPE) {
        e.target.blur();
      }

      var _e$target = e.target,
          value = _e$target.value,
          selectionStart = _e$target.selectionStart,
          selectionEnd = _e$target.selectionEnd;


      var tabCharacter = (insertSpaces ? ' ' : '\t').repeat(tabSize);

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
          textareaId = _props.textareaId,
          textareaClassName = _props.textareaClassName,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled,
          form = _props.form,
          maxLength = _props.maxLength,
          minLength = _props.minLength,
          name = _props.name,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          required = _props.required,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown,
          onValueChange = _props.onValueChange,
          tabSize = _props.tabSize,
          insertSpaces = _props.insertSpaces,
          ignoreTabKey = _props.ignoreTabKey,
          preClassName = _props.preClassName,
          rest = _objectWithoutProperties(_props, ['value', 'style', 'padding', 'highlight', 'textareaId', 'textareaClassName', 'autoFocus', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'onClick', 'onFocus', 'onBlur', 'onKeyUp', 'onKeyDown', 'onValueChange', 'tabSize', 'insertSpaces', 'ignoreTabKey', 'preClassName']);

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
          className: className + (textareaClassName ? ' ' + textareaClassName : ''),
          id: textareaId,
          value: value,
          onChange: this._handleChange,
          onKeyDown: this._handleKeyDown,
          onClick: onClick,
          onKeyUp: onKeyUp,
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
          className: preClassName,
          'aria-hidden': 'true',
          style: _extends({}, styles.editor, styles.highlight, contentStyle)
        }, typeof highlighted === 'string' ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } } : { children: highlighted })),
        React.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: cssText } })
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
    boxSizing: 'border-box',
    padding: 0,
    overflow: 'hidden'
  },
  textarea: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    resize: 'none',
    color: 'inherit',
    overflow: 'hidden',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextFillColor: 'transparent'
  },
  highlight: {
    position: 'relative',
    pointerEvents: 'none'
  },
  editor: {
    margin: 0,
    border: 0,
    background: 'none',
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
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word'
  }
};
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
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
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
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
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

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
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
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

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

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

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

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

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
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
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
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

  var boundActionCreators = {};

  for (var key in actionCreators) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
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
      return _objectSpread2({}, store, {
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
    };
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
    _add(endpoint.parent, endpoint.key, util_1.clone(operation.value));
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
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
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/*! exports provided: useCallback, useCallbackOne, useMemo, useMemoOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackOne", function() { return useCallbackOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoOne", function() { return useMemoOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var committed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initial);
  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = isInputMatch ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




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

/***/ "hotkeys-js":
/*!*****************************!*\
  !*** external "hotkeys-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hotkeys-js");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

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