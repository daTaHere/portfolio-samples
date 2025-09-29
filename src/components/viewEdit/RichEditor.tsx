import React, { useState } from 'react';
import {
  Box,
  useTheme,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GlobalStyles } from '@mui/material';

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export const RichEditor: React.FC<RichEditorProps> = ({ value, onChange }) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your story...',
        showOnlyWhenEditable: true,
      }),
    ],
    content: value && value.trim() !== '' ? value : null,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'editor-content',
        style: 'min-height: 100%; outline: none;',
      },
    },
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  if (!editor) return null;

  const applyList = (type: 'bullet' | 'ordered') => {
    editor
      .chain()
      .focus()
      [type === 'bullet' ? 'toggleBulletList' : 'toggleOrderedList']()
      .run();
    handleMenuClose();
  };

  const insertLink = () => {
    const url = prompt('Enter the URL');
    if (url)
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    handleMenuClose();
  };

  return (
    <Box>
      {/* Toolbar */}
      <ToggleButtonGroup
        size="small"
        sx={{ mb: 1 }}
        color="primary"
        aria-label="text formatting"
      >
        <Tooltip title="Bold (Ctrl+B)">
          <ToggleButton
            value="bold"
            selected={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <FormatBoldIcon color="primary" />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Italic (Ctrl+I)">
          <ToggleButton
            value="italic"
            selected={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <FormatItalicIcon color="primary" />
          </ToggleButton>
        </Tooltip>

        <Tooltip title="Underline (Ctrl+U)">
          <ToggleButton
            value="underline"
            selected={editor.isActive('underline')}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <FormatUnderlinedIcon color="primary" />
          </ToggleButton>
        </Tooltip>

        {/* Extra options menu */}
        <Tooltip title="More options">
          <IconButton size="small" onClick={handleMenuOpen} sx={{ ml: 1 }}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={() => applyList('bullet')}>Bullet List</MenuItem>
          <MenuItem onClick={() => applyList('ordered')}>
            Numbered List
          </MenuItem>
          <MenuItem onClick={insertLink}>Insert Link</MenuItem>
        </Menu>
      </ToggleButtonGroup>

      {/* Editor box */}
      <Box
        onClick={() => editor.chain().focus().run()}
        sx={{
          border: 3,
          borderColor: focused ? theme.palette.secondary.main : '#ccc',
          borderRadius: 1,
          p: 1,
          bgcolor: 'white',
          height: 300,
          overflowY: 'auto',
          overflowX: 'hidden',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          transition: 'border-color 0.2s',
          cursor: 'text',
        }}
      >
        <GlobalStyles
          styles={{
            '.editor-content p.is-editor-empty::before': {
              content: '"Start typing your story..."',
              color: '#999',
              pointerEvents: 'none',
              height: 0,
              float: 'left',
            },
          }}
        />
        <EditorContent
          editor={editor}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            color: theme.palette.common.black,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            minHeight: '100%',
          }}
        />
      </Box>
    </Box>
  );
};
