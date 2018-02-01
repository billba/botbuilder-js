/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A card representing a request to sign in
 *
 */
class SigninCard {
  /**
   * Create a SigninCard.
   * @member {string} [text] Text for signin request
   * @member {array} [buttons] Action to use to perform signin
   */
  constructor() {
  }

  /**
   * Defines the metadata of SigninCard
   *
   * @returns {object} metadata of SigninCard
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SigninCard',
      type: {
        name: 'Composite',
        className: 'SigninCard',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          buttons: {
            required: false,
            serializedName: 'buttons',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CardActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'CardAction'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SigninCard;
