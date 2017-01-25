"use strict";

module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: String,
        status: String,
        password: String
    },
    {
        timestamps: true
    });

    var assetSchema = new Schema({
        assetTag: {
            type: String,
            unique: true,
            required: true
        },
        type: {
            type: String,
            enum: ['product', 'case', 'tote'],
            default: 'product'
        },
        name: String,
        description: String,
        caseNumber: {
            type: Number,
            unique: true
        },
        inCase: {
            status: Boolean,
            case: Number,
            quantity: Number
        }
    },
    {
        timestamps: true
    });

    var orderSchema = new Schema({
        user: String,
        status: {
            type: String,
            enum: ['checkin', 'checkout'],
            default: 'checkin'
        },
        assetTag: String,
        location: String,
        productName: String
    },
    {
        timestamps: true
    });

    return {
        user: userSchema,
        asset: assetSchema,
        order: orderSchema
    };
};