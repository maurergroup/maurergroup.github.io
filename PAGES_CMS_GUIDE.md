# Pages CMS Setup Guide

## What is Pages CMS?

Pages CMS is a lightweight, open-source content management system designed specifically for static sites hosted on GitHub. It provides a user-friendly interface for editing markdown files without requiring technical knowledge.

## Key Features

- **No installation required** - Works directly from GitHub
- **Git-based** - All changes are committed to your repository
- **Free and open-source**
- **Works with GitHub Pages** - Perfect for your existing setup
- **Visual editor** - Edit content without knowing markdown
- **Media management** - Upload and manage images
- **OAuth authentication** - Secure access via GitHub

## How Pages CMS Works

Pages CMS creates a web interface at `https://pagescms.org` that connects to your GitHub repository. When editors make changes:

1. They log in with their GitHub account
2. Edit content through the visual interface
3. Changes are committed directly to your GitHub repository
4. GitHub Actions rebuilds and deploys your site automatically

## Setup Instructions

### Step 1: Configuration File

I've already created the configuration file [`.pages.yml`](.pages.yml) in your project root. This file defines all your content collections:

- **Team Members** - Manage profiles, locations, research areas
- **Research Areas** - Edit research content and add videos
- **Publications** - Add and update papers
- **Software** - Manage software projects
- **Job Opportunities** - Post available positions

### Step 2: Commit and Push to GitHub

```bash
git add .pages.yml
git commit -m "Add Pages CMS configuration"
git push origin main
```

### Step 3: Access Pages CMS

1. Go to **https://pagescms.org**
2. Click **"Sign in with GitHub"**
3. Authorize Pages CMS to access your repository
4. Select your repository from the list
5. Start editing content!

### Step 4: Grant Access to Team Members

Anyone with write access to your GitHub repository can use Pages CMS:

1. Go to your repository on GitHub
2. Click **Settings** → **Collaborators**
3. Add team members with write access
4. They can then log in to https://pagescms.org

## Using Pages CMS

### Editing Content

#### Team Members

1. Navigate to **Team Members** collection
2. Click on a team member to edit
3. Update fields:
   - Name, role, email
   - Locations (can select multiple)
   - Research areas (can select multiple)
   - Profile image (upload or link)
   - Social links (GitHub, Scholar, Twitter)
   - Education history
   - Biography (rich text editor with markdown support)
4. Click **Save** to commit changes

#### Research Areas

1. Go to **Research Areas** collection
2. Click on an area to edit
3. Edit content:
   - Title and description
   - Display order
   - Hero video path (optional)
   - Full content with markdown support
4. Save changes

The rich text editor supports:
- Headings (H2, H3)
- Bold, italic, links
- Lists (bulleted and numbered)
- Code blocks
- LaTeX equations (use `$$...$$`)
- HTML (for 3Dmol.js molecular viewers)

#### Publications

1. Navigate to **Publications**
2. Click **New Publication** or edit existing
3. Fill in:
   - Title, authors (one per line)
   - Venue, publication date
   - Links (PDF, code, dataset, demo)
   - Abstract
4. Save

#### Adding New Content

1. Select a collection
2. Click **New [Collection Name]**
3. Fill in required fields (marked with *)
4. Add optional fields as needed
5. Click **Save**

The new file will be created in the appropriate `src/content/` folder.

### Uploading Images

#### Team Member Photos

1. Edit a team member
2. Click on **Profile Image** field
3. Click **Upload Image**
4. Select image file
5. Image is uploaded to `public/images/`
6. Path is automatically filled in

#### Location Images

For location images on the homepage:

1. Upload images through the media manager
2. Note the image path (e.g., `/images/vienna.jpg`)
3. Manually update `src/pages/index.astro` to use the images

**Note:** Pages CMS focuses on content collections. For structural changes like location images, you'll still need to edit the Astro files directly.

### Deleting Content

1. Navigate to the content item
2. Look for **Delete** button (usually in top-right)
3. Confirm deletion
4. Changes are committed to GitHub

## Configuration Details

### Collections

The `.pages.yml` file defines these collections:

| Collection | Path | Purpose |
|------------|------|---------|
| Team Members | `src/content/team/` | Researcher profiles |
| Research Areas | `src/content/research/` | Research area pages |
| Publications | `src/content/publications/` | Academic papers |
| Software | `src/content/software/` | Software projects |
| Opportunities | `src/content/opportunities/` | Job postings |

### Field Types

The configuration uses these field types:

- **string** - Single line text
- **rich-text** - Markdown editor with preview
- **number** - Numeric input
- **date** - Date picker
- **list** - Multiple values or dropdown selection
- **image** - Image upload/URL

### Required vs Optional Fields

Fields marked `required: true` must be filled in before saving:

**Team Members:**
- Name, role, email
- Order, locations

**Research Areas:**
- Title, description
- Order, content

**Publications:**
- Title, authors, venue
- Date, order

## Customizing the Configuration

To add new fields or collections, edit [`.pages.yml`](.pages.yml):

### Adding a New Field

```yaml
- name: fieldName
  label: Display Label
  type: string
  required: false
  help: Help text shown to users
```

### Adding a New Collection

```yaml
- name: collection-name
  label: Display Name
  path: src/content/collection-name
  extension: md
  fields:
    - name: title
      label: Title
      type: string
      required: true
```

After editing `.pages.yml`, commit and push changes:

```bash
git add .pages.yml
git commit -m "Update Pages CMS configuration"
git push
```

## Workflow for Content Editors

### For Non-Technical Users

1. **Access the CMS:**
   - Go to https://pagescms.org
   - Sign in with GitHub account

2. **Edit Existing Content:**
   - Browse collections on the left
   - Click on item to edit
   - Make changes in the editor
   - Click Save

3. **Add New Content:**
   - Select collection
   - Click "New" button
   - Fill in form
   - Click Save

4. **Preview Changes:**
   - Wait 2-3 minutes for GitHub Actions to rebuild
   - Visit your live site to see changes

### For Developers

You can still edit files directly:

```bash
# Edit files locally
nano src/content/team/new-member.md

# Commit and push
git add .
git commit -m "Add new team member"
git push
```

Changes made locally and via Pages CMS can coexist - they're all just Git commits!

## Advanced Features

### Media Management

Pages CMS includes a media library for managing images:

1. Click **Media** in the sidebar
2. View all uploaded images
3. Upload new images
4. Copy image URLs for use in content

**Configuration:**
```yaml
media:
  output: public/images      # Where files are stored
  publicPath: /images        # URL path to access them
```

### Custom Validation

Add validation to fields:

```yaml
- name: email
  label: Email
  type: string
  pattern: ^[^\s@]+@[^\s@]+\.[^\s@]+$
  help: Must be a valid email address
```

### Conditional Fields

Show fields only when certain conditions are met:

```yaml
- name: website
  label: Website
  type: string
  condition:
    field: hasWebsite
    value: true
```

## Troubleshooting

### Can't Access Pages CMS

**Problem:** Website shows error or won't load

**Solutions:**
1. Verify `.pages.yml` is in repository root
2. Check file syntax (YAML is indentation-sensitive)
3. Ensure you have write access to the repository

### Changes Not Appearing

**Problem:** Saved changes don't show on website

**Solutions:**
1. Wait 2-3 minutes for GitHub Actions to complete
2. Check GitHub Actions tab for build errors
3. Hard refresh browser (Ctrl+Shift+R)

### Images Not Uploading

**Problem:** Image upload fails

**Solutions:**
1. Check image size (keep under 5MB)
2. Verify media configuration in `.pages.yml`
3. Ensure you have write permissions

### Syntax Errors

**Problem:** YAML configuration errors

**Solution:** Use a YAML validator:
- https://www.yamllint.com/
- Paste your `.pages.yml` content
- Fix any reported errors

## Security

### Access Control

- Only users with GitHub repository access can use Pages CMS
- Changes are tracked in Git history
- All edits are attributed to the GitHub user who made them

### Permissions

Configure repository permissions:

- **Read:** Can view but not edit
- **Write:** Can edit content via Pages CMS
- **Admin:** Can modify configuration

### Reviewing Changes

All Pages CMS edits create Git commits:

1. Go to your repository on GitHub
2. Click **Commits** to see history
3. Review changes made by team members
4. Revert if needed using Git

## Comparison with Other CMS Options

| Feature | Pages CMS | Netlify CMS | Tina CMS | Decap CMS |
|---------|-----------|-------------|----------|-----------|
| Installation | None | npm package | npm package | npm package |
| Hosting | External | Self-hosted | Self-hosted | Self-hosted |
| Cost | Free | Free | Free tier | Free |
| Setup Complexity | Low | Medium | Medium | Medium |
| GitHub Integration | Native | Via OAuth | Native | Via OAuth |

**Why Pages CMS?**
- ✅ No installation or build configuration needed
- ✅ No additional hosting required
- ✅ Simple YAML configuration
- ✅ Perfect for GitHub Pages
- ✅ No maintenance overhead

## Best Practices

### 1. Organize Content Logically

Use the display order field to control arrangement:
- Team members: 1, 2, 3, 4...
- Publications: Most recent = 1

### 2. Use Descriptive Filenames

When creating new content, use lowercase with hyphens:
- Good: `john-smith.md`, `machine-learning.md`
- Avoid: `John Smith.md`, `ML.md`

### 3. Write Clear Help Text

In `.pages.yml`, add helpful descriptions:

```yaml
- name: researchAreas
  label: Research Areas
  type: list
  help: Select all areas this person works in (can select multiple)
```

### 4. Regular Backups

Your content is in Git, which is already backed up, but:
- Periodically clone your repository locally
- Consider setting up automated backups

### 5. Test Before Publishing

1. Make changes via Pages CMS
2. Wait for build to complete
3. Check staging URL before sharing with public

## Resources

- **Pages CMS Website:** https://pagescms.org
- **GitHub Repository:** https://github.com/pages-cms/pages-cms
- **Documentation:** https://pagescms.org/docs
- **YAML Syntax:** https://yaml.org/spec/

## Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review Pages CMS documentation
3. Check GitHub repository issues
4. Ask team members with Git/GitHub experience

## Next Steps

Now that Pages CMS is configured:

1. ✅ Commit `.pages.yml` to your repository
2. ✅ Push to GitHub
3. ✅ Visit https://pagescms.org and sign in
4. ✅ Try editing a team member or publication
5. ✅ Share access with team members
6. ✅ Train content editors on the interface

Your website is now ready for easy content management without requiring markdown knowledge!
