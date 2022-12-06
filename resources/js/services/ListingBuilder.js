export default class ListingBuilder {
    #props = {};
    constructor(requestObj) {
        this.request = { ...requestObj };    
    }

    hasName() {
        if (this.request.hasOwnProperty('name') && this.request.name != '') {
            this.#props.name = this.request.name;
        }
        return this; 
    }

    hasPropertyType() {
        if (this.request.hasOwnProperty('property_type') && this.request.property_type != '') {
            this.#props.property_type = this.request.property_type;
        }
        return this; 
    }

    hasSubPropertyType() {
        if (this.request.hasOwnProperty('sub_property_type') && this.request.sub_property_type != '') {
            this.#props.sub_property_type = this.request.sub_property_type;
        }
        return this; 
    }

    hasStatus() {
        if (this.request.hasOwnProperty('status') && this.request.status != '') {
            this.#props.status = this.request.status;
        }
        return this; 
    }

    hasPrice() {
        if (this.request.hasOwnProperty('price') && this.request.price != '') {
            this.#props.price = this.request.price;
        }
        return this; 
    }

    hasCountry() {
        if (this.request.hasOwnProperty('country') && this.request.country != '') {
            this.#props.country = this.request.country;
        }
        return this; 
    }

    hasState() {
        if (this.request.hasOwnProperty('state') && this.request.state != '') {
            this.#props.state = this.request.state;
        }
        return this; 
    }

    hasCity() {
        if (this.request.hasOwnProperty('city') && this.request.city != '') {
            this.#props.city = this.request.city;
        }
        return this; 
    }

    hasCreatedAt() {
        if (this.request.hasOwnProperty('created_at') && this.request.created_at != '') {
            this.#props.created_at = this.request.created_at;
        }
        return this; 
    }

    build() {
        return this.#props;
    }
};