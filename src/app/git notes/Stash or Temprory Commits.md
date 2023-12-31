# stash

source: *https://www.atlassian.com/git/tutorials/saving-changes/git-stash*

## Stashing your work

> The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy.

```
span
```

> At this point you're free to make changes, create new commits, switch branches, and perform any other Git operations; then come back and re-apply your stash when you're ready.

> Note that the stash is local to your Git repository; stashes are not transferred to the server when you push.

## Re-applying your stashed changes

> You can reapply previously stashed changes with `git stash pop`:

```
$ git status
$ git stash pop
```

> _Popping_ your stash removes the changes from your stash and reapplies them to your working copy.

> Alternatively, you can reapply the changes to your working copy _and_ keep them in your stash with `git stash apply`:

```
$ git stash apply
```

## Managing multiple stashes

> You aren't limited to a single stash. You can run `git stash` several times to create multiple stashes, and then use `git stash list` to view them. By default, stashes are identified simply as a "WIP" – work in progress – on top of the branch and commit that you created the stash from. After a while it can be difficult to remember what each stash contains:

```
$ git stash list
```

> o provide a bit more context, it's good practice to annotate your stashes with a description, using `git stash save "message"`:

```
$ git stash list
$ git status
$ git stash save "add style to our site"
$ git stash list
```

> By default, `git stash pop` will re-apply the most recently created stash: `stash@{0}`

> You can choose which stash to re-apply by passing its identifier as the last argument, for example:

```
$ git stash pop stash@{2}
```

## Viewing stash diffs

> You can view a summary of a stash with `git stash show`:

```undefined
$ git stash show
```

## Cleaning up your stash

> If you decide you no longer need a particular stash, you can delete it with `git stash drop`:

```scss
$ git stash drop stash@{1}
```

> Or you can delete all of your stashes with:

```scss
$ git stash clear
```
