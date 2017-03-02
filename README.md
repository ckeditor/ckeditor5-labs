CKEditor 5 Labs
===============

Initial steps.

```
cd ckeditor5-labs
npm i
```

If you want to use `ckeditor5-*` packages from npm, skip this. But if you want to use packages from `ckeditor5` and `ckeditor5-dev` repositories, make sure you have them cloned (and working) and use this:

```
ln -s /workspace/ckeditor5/packages
ln -s /workspace/ckeditor5-dev/packages packages-dev
lerna bootstrap
```

Then, follow the specific installation steps of a sample you're interested in.
