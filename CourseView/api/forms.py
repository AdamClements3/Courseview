# These contain forms, which will be used for user input i think

from django import forms

class InputBox(forms.Form):
    inputText = forms.CharField(label='Enter a Course Number', max_length=4)
