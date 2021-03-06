import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import api, { baseURLify } from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ name }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  const execRegisterField = () => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  };

  useEffect(execRegisterField, [ref.current, name]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            (preview && baseURLify(preview)) ||
            'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="User Avatar"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
