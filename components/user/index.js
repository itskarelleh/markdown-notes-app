import React from 'react';

const NewUserProfile = () => {

    return (
        <>
            <section>
                <h1 className='is-text-1'>Welcome!</h1>
                <p>Please fill out your profile</p>

                <form>
                    <input type="text" name="firstName" />
                    <input type="text" name="lastName" />
                    <input type="text" name="displayName" />
                </form>
            </section>
        </>
    )
}

const NewUserAccountForm = () => {

}

export { NewUserProfile, NewUserAccountForm }