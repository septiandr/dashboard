import React, { useState, useRef } from 'react';
import { HiPaperClip } from 'react-icons/hi';
import { MdInsertEmoticon } from 'react-icons/md';


interface InputProps {
  onSendMessage: (message: string, media?: File) => void;
}

const InputComponent: React.FC<InputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [media, setMedia] = useState<File | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleMediaInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setMedia(event.target.files[0]);
    }
  };

  const handleSendClick = () => {
    if (media) {
      onSendMessage(message, media);
    } else {
      onSendMessage(message);
    }
    setMessage('');
    setMedia(undefined);
  };

  const handlePaperClipClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className='w-full rounded-lg bg-[#f7f7f9] p-2'>
      <textarea className='w-full bg-[#f7f7f9]' value={message} onChange={handleInputChange} placeholder="Type your message here" />
      <div className='flex items-center w-full justify-between'>
        <div className='flex gap-2'>
            <MdInsertEmoticon size={20}/> 
            <div>
                <label htmlFor="file-input" onClick={handlePaperClipClick}>
                    <HiPaperClip size={20}/>
                </label>
                <input
                    id="file-input"
                    ref={fileInputRef}
                    type="file"
                    onChange={handleMediaInputChange}
                    style={{ display: 'none' }}
                />
            </div>   
        </div>
        <button className='text-white p-1 bg-[#525dea]' onClick={handleSendClick}>Send Now</button>
      </div>
    </div>
  );
};

export default InputComponent;
