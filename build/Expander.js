var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
var ExpanderHeader = function (params) {
    return (_jsxs("div", __assign({ className: "expander-header" }, { children: [_jsx("div", __assign({ className: "expander-header-icon-container", onClick: function () { return params.expanderStateSetter(!params.expanderState); } }, { children: _jsx("span", __assign({ className: "expander-header-icon" }, { children: params.expanderState ? '-' : '+' }), void 0) }), void 0), params.header] }), void 0));
};
export var ExpanderComponent = function (params) {
    var _a = useState(!!params.initialState), expanderState = _a[0], setExpanderState = _a[1];
    var expanderBody = expanderState
        ? _jsx("div", __assign({ className: "expander-body" }, { children: params.children }), void 0)
        : null;
    return (_jsxs("div", __assign({ className: "expander" }, { children: [_jsx(ExpanderHeader, { header: params.header, expanderState: expanderState, expanderStateSetter: setExpanderState }, void 0), expanderBody] }), void 0));
};
