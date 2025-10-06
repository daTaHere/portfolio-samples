/*
  File upload Field component. 
  Allows user to drag and drop image files or urls to their Post.

  Future interation, this component will be intergated into the preview section.
*/

import { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { theme } from '../../theme';

export const FileUploader: React.FC<{
  onFileSelect: (file: File) => void;
}> = ({ onFileSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) onFileSelect(acceptedFiles[0]);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    onDrop,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed grey',
        p: 2,
        textAlign: 'center',
        borderRadius: 1,
        cursor: 'pointer',
        bgcolor: 'white',
      }}
    >
      <input {...getInputProps()} />
      <Typography sx={{ color: theme.palette.text.secondary }}>
        {isDragActive ? 'Release to drop the file here' : 'Upload Image'}
      </Typography>
      <CloudUploadOutlinedIcon color="secondary" fontSize="large" />
    </Box>
  );
};
