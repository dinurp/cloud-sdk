import { TestEntityOtherMultiLinkRequestBuilder } from './TestEntityOtherMultiLinkRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_TestEntityOtherMultiLink" of service "API_TEST_SRV".
 */
export declare class TestEntityOtherMultiLink extends EntityV2 implements TestEntityOtherMultiLinkType {
    /**
     * Technical entity name for TestEntityOtherMultiLink.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TestEntityOtherMultiLink.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Key Property.
     */
    keyProperty: string;
    /**
     * Returns an entity builder to construct instances `TestEntityOtherMultiLink`.
     * @returns A builder that constructs instances of entity type `TestEntityOtherMultiLink`.
     */
    static builder(): EntityBuilderType<TestEntityOtherMultiLink, TestEntityOtherMultiLinkType>;
    /**
     * Returns a request builder to construct requests for operations on the `TestEntityOtherMultiLink` entity type.
     * @returns A `TestEntityOtherMultiLink` request builder.
     */
    static requestBuilder(): TestEntityOtherMultiLinkRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TestEntityOtherMultiLink`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TestEntityOtherMultiLink`.
     */
    static customField(fieldName: string): CustomFieldV2<TestEntityOtherMultiLink>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TestEntityOtherMultiLinkType {
    keyProperty: string;
}
export declare namespace TestEntityOtherMultiLink {
    /**
     * Static representation of the [[keyProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_PROPERTY: StringField<TestEntityOtherMultiLink>;
    /**
     * All fields of the TestEntityOtherMultiLink entity.
     */
    const _allFields: Array<StringField<TestEntityOtherMultiLink>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TestEntityOtherMultiLink>;
    /**
     * All key fields of the TestEntityOtherMultiLink entity.
     */
    const _keyFields: Array<Field<TestEntityOtherMultiLink>>;
    /**
     * Mapping of all key field names to the respective static field property TestEntityOtherMultiLink.
     */
    const _keys: {
        [keys: string]: Field<TestEntityOtherMultiLink>;
    };
}
//# sourceMappingURL=TestEntityOtherMultiLink.d.ts.map