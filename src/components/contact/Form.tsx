import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FormContainer } from './styles';
import { useState } from 'react';

const contactSchema = z.object({
    name: z.string().min(3, 'Nome curto!'),
    email: z.string().regex(/\S+@\S+\.\S+/, 'Email inválido! user@email.com'),
    phoneNumber: z.string().min(14, 'Número inválido! (XX) 9XXXX-XXXX').max(15, 'Número inválido! (XX) 9XXXX-XXXX'),
    subject: z.string().min(3, 'Assunto curto!'),
    txt_message: z.string().min(3, 'Mensagem curta!'),
});

type ContactData = z.infer<typeof contactSchema>;

function Form() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, getValues } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
    });
    const [emailValid, setEmailValid] = useState<boolean>(false)

    const resetForm = () => {
        if (isSubmitSuccessful) {
            reset({
                name: '',
                email: '',
                phoneNumber: '',
                subject: '',
                txt_message: '',
            });
        }
    };

    const sendEmail = () => {
        const template = {
            from_name: getValues("name"),
            email: getValues('email'),
            subject: getValues('subject'),
            phoneNumber: getValues('phoneNumber'),
            message: getValues('txt_message'),
        };

        emailjs.send('service_c0dyi0t', 'template_pxeokfc', template, 'K9YPasuHtbdSlNyI_')
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                resetForm();
                setEmailValid(true)
            }, (error) => {
                console.log('Error: ', error);
            });
    };

    const onSubmit = async (data: ContactData) => {
        console.log(data);
        setEmailValid(true)
        sendEmail();
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nome" type="text" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
            <div className='short_container'>
                <div className='short_content'>
                    <input placeholder="E-mail" type="email" {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className='short_content'>
                    <input placeholder="Telefone" type="text" {...register('phoneNumber')} />
                    {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                </div>
            </div>
            <input placeholder="Assunto" type="text" {...register('subject')} />
            {errors.subject && <span>{errors.subject.message}</span>}
            <textarea {...register('txt_message')} />
            {errors.txt_message && <span>{errors.txt_message.message}</span>}
            {emailValid && <span className='email_correct'>Email enviado com sucesso!</span>}
            <button type='submit'>Enviar mensagem</button>
        </ FormContainer>
    )
};

export default Form