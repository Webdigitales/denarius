<?php

namespace Drupal\wdi_modal_booking\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form builder for wdi modal booking settings form.
 */
class AdminSettingsForm extends ConfigFormBase
{

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state)
  {
    $config = $this->config('wdi_modal_booking.settings');

    $form['basic'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Modal Booking Settings'),
      '#collapsible' => FALSE,
    ];

    $form['basic']['nbr_days'] = [
      '#type' => 'number',
      '#title' => $this->t('Nombre de jour'),
      '#description' => $this->t('Définissez le nombre de jour pour afficher de nouveau la modale.'),
      '#default_value' => $config->get('nbr_days'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId()
  {
    return 'wdi_modal_booking_admin_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state)
  {
    parent::submitForm($form, $form_state);
    $config = $this->config('wdi_modal_booking.settings');

    $config->set('nbr_days', $form_state->getValue('nbr_days'));

    $config->save();
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames()
  {
    return ['wdi_modal_booking.settings'];
  }

}
