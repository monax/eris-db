// source: tendermint/blockchain/types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var tendermint_types_block_pb = require('../../tendermint/types/block_pb.js');
goog.object.extend(proto, tendermint_types_block_pb);
goog.exportSymbol('proto.tendermint.blockchain.BlockRequest', null, global);
goog.exportSymbol('proto.tendermint.blockchain.BlockResponse', null, global);
goog.exportSymbol('proto.tendermint.blockchain.Message', null, global);
goog.exportSymbol('proto.tendermint.blockchain.Message.SumCase', null, global);
goog.exportSymbol('proto.tendermint.blockchain.NoBlockResponse', null, global);
goog.exportSymbol('proto.tendermint.blockchain.StatusRequest', null, global);
goog.exportSymbol('proto.tendermint.blockchain.StatusResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.BlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.blockchain.BlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.BlockRequest.displayName = 'proto.tendermint.blockchain.BlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.NoBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.blockchain.NoBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.NoBlockResponse.displayName = 'proto.tendermint.blockchain.NoBlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.BlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.blockchain.BlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.BlockResponse.displayName = 'proto.tendermint.blockchain.BlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.StatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.blockchain.StatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.StatusRequest.displayName = 'proto.tendermint.blockchain.StatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.StatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.blockchain.StatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.StatusResponse.displayName = 'proto.tendermint.blockchain.StatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tendermint.blockchain.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tendermint.blockchain.Message.oneofGroups_);
};
goog.inherits(proto.tendermint.blockchain.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tendermint.blockchain.Message.displayName = 'proto.tendermint.blockchain.Message';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.BlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.BlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.BlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.BlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.BlockRequest}
 */
proto.tendermint.blockchain.BlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.BlockRequest;
  return proto.tendermint.blockchain.BlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.BlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.BlockRequest}
 */
proto.tendermint.blockchain.BlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.BlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.BlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.BlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.BlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.tendermint.blockchain.BlockRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.blockchain.BlockRequest} returns this
 */
proto.tendermint.blockchain.BlockRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.NoBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.NoBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.NoBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.NoBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.NoBlockResponse}
 */
proto.tendermint.blockchain.NoBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.NoBlockResponse;
  return proto.tendermint.blockchain.NoBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.NoBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.NoBlockResponse}
 */
proto.tendermint.blockchain.NoBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.NoBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.NoBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.NoBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.NoBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.tendermint.blockchain.NoBlockResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.blockchain.NoBlockResponse} returns this
 */
proto.tendermint.blockchain.NoBlockResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.BlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.BlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.BlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.BlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && tendermint_types_block_pb.Block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.BlockResponse}
 */
proto.tendermint.blockchain.BlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.BlockResponse;
  return proto.tendermint.blockchain.BlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.BlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.BlockResponse}
 */
proto.tendermint.blockchain.BlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_types_block_pb.Block;
      reader.readMessage(value,tendermint_types_block_pb.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.BlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.BlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.BlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.BlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_types_block_pb.Block.serializeBinaryToWriter
    );
  }
};


/**
 * optional tendermint.types.Block block = 1;
 * @return {?proto.tendermint.types.Block}
 */
proto.tendermint.blockchain.BlockResponse.prototype.getBlock = function() {
  return /** @type{?proto.tendermint.types.Block} */ (
    jspb.Message.getWrapperField(this, tendermint_types_block_pb.Block, 1));
};


/**
 * @param {?proto.tendermint.types.Block|undefined} value
 * @return {!proto.tendermint.blockchain.BlockResponse} returns this
*/
proto.tendermint.blockchain.BlockResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.BlockResponse} returns this
 */
proto.tendermint.blockchain.BlockResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.BlockResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.StatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.StatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.StatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.StatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.StatusRequest}
 */
proto.tendermint.blockchain.StatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.StatusRequest;
  return proto.tendermint.blockchain.StatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.StatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.StatusRequest}
 */
proto.tendermint.blockchain.StatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.StatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.StatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.StatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.StatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.StatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.StatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.StatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.StatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    base: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.StatusResponse}
 */
proto.tendermint.blockchain.StatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.StatusResponse;
  return proto.tendermint.blockchain.StatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.StatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.StatusResponse}
 */
proto.tendermint.blockchain.StatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.StatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.StatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.StatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.StatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBase();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 height = 1;
 * @return {number}
 */
proto.tendermint.blockchain.StatusResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.blockchain.StatusResponse} returns this
 */
proto.tendermint.blockchain.StatusResponse.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 base = 2;
 * @return {number}
 */
proto.tendermint.blockchain.StatusResponse.prototype.getBase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tendermint.blockchain.StatusResponse} returns this
 */
proto.tendermint.blockchain.StatusResponse.prototype.setBase = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tendermint.blockchain.Message.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.tendermint.blockchain.Message.SumCase = {
  SUM_NOT_SET: 0,
  BLOCK_REQUEST: 1,
  NO_BLOCK_RESPONSE: 2,
  BLOCK_RESPONSE: 3,
  STATUS_REQUEST: 4,
  STATUS_RESPONSE: 5
};

/**
 * @return {proto.tendermint.blockchain.Message.SumCase}
 */
proto.tendermint.blockchain.Message.prototype.getSumCase = function() {
  return /** @type {proto.tendermint.blockchain.Message.SumCase} */(jspb.Message.computeOneofCase(this, proto.tendermint.blockchain.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tendermint.blockchain.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.blockchain.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.blockchain.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockRequest: (f = msg.getBlockRequest()) && proto.tendermint.blockchain.BlockRequest.toObject(includeInstance, f),
    noBlockResponse: (f = msg.getNoBlockResponse()) && proto.tendermint.blockchain.NoBlockResponse.toObject(includeInstance, f),
    blockResponse: (f = msg.getBlockResponse()) && proto.tendermint.blockchain.BlockResponse.toObject(includeInstance, f),
    statusRequest: (f = msg.getStatusRequest()) && proto.tendermint.blockchain.StatusRequest.toObject(includeInstance, f),
    statusResponse: (f = msg.getStatusResponse()) && proto.tendermint.blockchain.StatusResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tendermint.blockchain.Message}
 */
proto.tendermint.blockchain.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.blockchain.Message;
  return proto.tendermint.blockchain.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.blockchain.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.blockchain.Message}
 */
proto.tendermint.blockchain.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.blockchain.BlockRequest;
      reader.readMessage(value,proto.tendermint.blockchain.BlockRequest.deserializeBinaryFromReader);
      msg.setBlockRequest(value);
      break;
    case 2:
      var value = new proto.tendermint.blockchain.NoBlockResponse;
      reader.readMessage(value,proto.tendermint.blockchain.NoBlockResponse.deserializeBinaryFromReader);
      msg.setNoBlockResponse(value);
      break;
    case 3:
      var value = new proto.tendermint.blockchain.BlockResponse;
      reader.readMessage(value,proto.tendermint.blockchain.BlockResponse.deserializeBinaryFromReader);
      msg.setBlockResponse(value);
      break;
    case 4:
      var value = new proto.tendermint.blockchain.StatusRequest;
      reader.readMessage(value,proto.tendermint.blockchain.StatusRequest.deserializeBinaryFromReader);
      msg.setStatusRequest(value);
      break;
    case 5:
      var value = new proto.tendermint.blockchain.StatusResponse;
      reader.readMessage(value,proto.tendermint.blockchain.StatusResponse.deserializeBinaryFromReader);
      msg.setStatusResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tendermint.blockchain.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.blockchain.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.blockchain.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.blockchain.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.blockchain.BlockRequest.serializeBinaryToWriter
    );
  }
  f = message.getNoBlockResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tendermint.blockchain.NoBlockResponse.serializeBinaryToWriter
    );
  }
  f = message.getBlockResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tendermint.blockchain.BlockResponse.serializeBinaryToWriter
    );
  }
  f = message.getStatusRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tendermint.blockchain.StatusRequest.serializeBinaryToWriter
    );
  }
  f = message.getStatusResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tendermint.blockchain.StatusResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockRequest block_request = 1;
 * @return {?proto.tendermint.blockchain.BlockRequest}
 */
proto.tendermint.blockchain.Message.prototype.getBlockRequest = function() {
  return /** @type{?proto.tendermint.blockchain.BlockRequest} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.blockchain.BlockRequest, 1));
};


/**
 * @param {?proto.tendermint.blockchain.BlockRequest|undefined} value
 * @return {!proto.tendermint.blockchain.Message} returns this
*/
proto.tendermint.blockchain.Message.prototype.setBlockRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.tendermint.blockchain.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.Message} returns this
 */
proto.tendermint.blockchain.Message.prototype.clearBlockRequest = function() {
  return this.setBlockRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.Message.prototype.hasBlockRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NoBlockResponse no_block_response = 2;
 * @return {?proto.tendermint.blockchain.NoBlockResponse}
 */
proto.tendermint.blockchain.Message.prototype.getNoBlockResponse = function() {
  return /** @type{?proto.tendermint.blockchain.NoBlockResponse} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.blockchain.NoBlockResponse, 2));
};


/**
 * @param {?proto.tendermint.blockchain.NoBlockResponse|undefined} value
 * @return {!proto.tendermint.blockchain.Message} returns this
*/
proto.tendermint.blockchain.Message.prototype.setNoBlockResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.tendermint.blockchain.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.Message} returns this
 */
proto.tendermint.blockchain.Message.prototype.clearNoBlockResponse = function() {
  return this.setNoBlockResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.Message.prototype.hasNoBlockResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BlockResponse block_response = 3;
 * @return {?proto.tendermint.blockchain.BlockResponse}
 */
proto.tendermint.blockchain.Message.prototype.getBlockResponse = function() {
  return /** @type{?proto.tendermint.blockchain.BlockResponse} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.blockchain.BlockResponse, 3));
};


/**
 * @param {?proto.tendermint.blockchain.BlockResponse|undefined} value
 * @return {!proto.tendermint.blockchain.Message} returns this
*/
proto.tendermint.blockchain.Message.prototype.setBlockResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.tendermint.blockchain.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.Message} returns this
 */
proto.tendermint.blockchain.Message.prototype.clearBlockResponse = function() {
  return this.setBlockResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.Message.prototype.hasBlockResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StatusRequest status_request = 4;
 * @return {?proto.tendermint.blockchain.StatusRequest}
 */
proto.tendermint.blockchain.Message.prototype.getStatusRequest = function() {
  return /** @type{?proto.tendermint.blockchain.StatusRequest} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.blockchain.StatusRequest, 4));
};


/**
 * @param {?proto.tendermint.blockchain.StatusRequest|undefined} value
 * @return {!proto.tendermint.blockchain.Message} returns this
*/
proto.tendermint.blockchain.Message.prototype.setStatusRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.tendermint.blockchain.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.Message} returns this
 */
proto.tendermint.blockchain.Message.prototype.clearStatusRequest = function() {
  return this.setStatusRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.Message.prototype.hasStatusRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StatusResponse status_response = 5;
 * @return {?proto.tendermint.blockchain.StatusResponse}
 */
proto.tendermint.blockchain.Message.prototype.getStatusResponse = function() {
  return /** @type{?proto.tendermint.blockchain.StatusResponse} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.blockchain.StatusResponse, 5));
};


/**
 * @param {?proto.tendermint.blockchain.StatusResponse|undefined} value
 * @return {!proto.tendermint.blockchain.Message} returns this
*/
proto.tendermint.blockchain.Message.prototype.setStatusResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.tendermint.blockchain.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tendermint.blockchain.Message} returns this
 */
proto.tendermint.blockchain.Message.prototype.clearStatusResponse = function() {
  return this.setStatusResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tendermint.blockchain.Message.prototype.hasStatusResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.tendermint.blockchain);
