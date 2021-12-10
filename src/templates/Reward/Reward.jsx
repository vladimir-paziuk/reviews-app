import React from 'react';
import { Form, Field } from 'react-final-form'

import Button from "components/Button";
import Input, { TextArea } from 'components/Input';
import InputField from 'templates/InputField';

import { rewardValidation } from "templates/Reward/constants";

import s from 'templates/Reward/Reward.module.scss'

const Reward = ({ data, onSubmit, close }) => (
    <div className={s.reward}>
        <Form
            initialValues={data}
            validate={rewardValidation}
            onSubmit={(data) => {
                onSubmit(data);
                close();
            }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name='destination'>
                        {({ input, meta}) => (
                            <InputField
                                label='To'
                                isShowError={meta.touched}
                                error={meta.error}
                            >
                                <Input
                                    placeholder="Alex Brown"
                                    {...input}
                                />
                            </InputField>
                        )}
                    </Field>
                    <Field name='amount'>
                        {({ input, meta}) => (
                            <InputField
                                label='Reward'
                                isShowError={meta.touched}
                                error={meta.error}
                            >
                                <Input
                                    placeholder="$30"
                                    {...input}
                                />
                            </InputField>
                        )}
                    </Field>
                    <Field name='reason'>
                        {({ input, meta}) => (
                            <InputField
                                label='Why?'
                                isShowError={meta.touched}
                                error={meta.error}
                            >
                                <TextArea {...input} />
                            </InputField>
                        )}
                    </Field>
                    <div className={s.reward__footer}>
                        <Button type='submit'>
                            Reward
                        </Button>
                    </div>
                </form>
            )}
        </Form>
    </div>
);

export default Reward;
