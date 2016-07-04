import {Validate} from 'expresskit';

export class Widget {
    @Validate({
        required: true,
        type: 'number'
    })
    public id: number;

    @Validate({
        required: true,
        type: 'string',
        minLength: 3,
        maxLength: 255
    })
    public name: string;

    @Validate({
        required: true,
        type: 'string',
        minLength: 40,
        maxLength: 500
    })
    public description: string;

    @Validate({
        required: true,
        type: 'number',
        min: [1, `Can't be less than $1.`]
    })
    public price: number;
}