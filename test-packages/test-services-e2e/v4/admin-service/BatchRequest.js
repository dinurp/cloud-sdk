"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV4(exports.defaultAdminServicePath, util_1.variadicArgumentToArray(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV4(util_1.variadicArgumentToArray(first, rest));
}
exports.changeset = changeset;
exports.defaultAdminServicePath = '/admin';
var map = { 'TestEntity': index_1.TestEntity, 'TestEntityLink': index_1.TestEntityLink };
//# sourceMappingURL=BatchRequest.js.map